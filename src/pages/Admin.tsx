import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut, Newspaper, Pencil, Plus, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type ArticleRow = Database["public"]["Tables"]["blog_posts"]["Row"];
type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
type ContentKind = "article" | "project";

type ArticleDraft = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string;
  image: string;
  author: string;
  authorAvatar: string;
  relatedPosts: string;
};

type ProjectDraft = {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  tech: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
  date: string;
};

const today = () => new Date().toISOString().slice(0, 10);
const emptyArticle = (): ArticleDraft => ({
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  date: today(),
  readTime: "5 min citire",
  tags: "",
  image: "",
  author: "Ioniță Aurel Mihai",
  authorAvatar: "/icons/profileblog.png",
  relatedPosts: "",
});
const emptyProject = (): ProjectDraft => ({
  title: "",
  slug: "",
  shortDescription: "",
  fullDescription: "",
  tech: "",
  image: "",
  githubUrl: "",
  liveUrl: "",
  featured: false,
  category: "web",
  date: today(),
});

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const commaSeparated = (value: string) =>
  value.split(",").map((item) => item.trim()).filter(Boolean).join(", ");

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <label className="grid gap-2 text-sm font-medium">
    {label}
    {children}
  </label>
);

const Admin = () => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loadingContent, setLoadingContent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kind, setKind] = useState<ContentKind>("article");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [articleDraft, setArticleDraft] = useState<ArticleDraft>(emptyArticle);
  const [projectDraft, setProjectDraft] = useState<ProjectDraft>(emptyProject);

  useEffect(() => {
    if (!supabase) {
      setCheckingSession(false);
      return;
    }

    void supabase.auth.getSession().then(({ data, error }) => {
      if (error) toast.error(`Nu s-a putut verifica sesiunea: ${error.message}`);
      setUser(data.session?.user ?? null);
      setCheckingSession(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setCheckingSession(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isAdmin = user?.app_metadata?.role === "admin";

  useEffect(() => {
    if (!supabase || !isAdmin) return;

    let active = true;
    setLoadingContent(true);
    void Promise.all([
      supabase.from("blog_posts").select("*").order("date", { ascending: false }),
      supabase.from("projects").select("*").order("date", { ascending: false }),
    ]).then(([articleResult, projectResult]) => {
      if (articleResult.error) throw articleResult.error;
      if (projectResult.error) throw projectResult.error;
      if (active) {
        setArticles(articleResult.data);
        setProjects(projectResult.data);
      }
    }).catch((error: Error) => {
      if (active) toast.error(`Nu s-a putut încărca panoul: ${error.message}`);
    }).finally(() => {
      if (active) setLoadingContent(false);
    });

    return () => {
      active = false;
    };
  }, [isAdmin]);

  const startNew = (nextKind: ContentKind) => {
    setKind(nextKind);
    setEditingId(null);
    setArticleDraft(emptyArticle());
    setProjectDraft(emptyProject());
  };

  const editArticle = (article: ArticleRow) => {
    setKind("article");
    setEditingId(article.id);
    setArticleDraft({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt ?? "",
      content: article.content ?? "",
      date: article.date ?? today(),
      readTime: article.read_time ?? "",
      tags: article.tags ?? "",
      image: article.image ?? "",
      author: article.author_name ?? "Ioniță Aurel Mihai",
      authorAvatar: article.author_avatar ?? "",
      relatedPosts: article.related_posts ?? "",
    });
  };

  const editProject = (project: ProjectRow) => {
    setKind("project");
    setEditingId(project.id);
    setProjectDraft({
      title: project.title,
      slug: project.slug,
      shortDescription: project.short_description ?? "",
      fullDescription: project.full_description ?? "",
      tech: project.tech ?? "",
      image: project.image ?? "",
      githubUrl: project.github_url ?? "",
      liveUrl: project.live_url ?? "",
      featured: project.featured,
      category: project.category,
      date: project.date ?? today(),
    });
  };

  const refreshContent = async () => {
    if (!supabase) return;
    const [articleResult, projectResult] = await Promise.all([
      supabase.from("blog_posts").select("*").order("date", { ascending: false }),
      supabase.from("projects").select("*").order("date", { ascending: false }),
    ]);
    if (articleResult.error) throw articleResult.error;
    if (projectResult.error) throw projectResult.error;
    setArticles(articleResult.data);
    setProjects(projectResult.data);
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["public-blog-posts"] }),
      queryClient.invalidateQueries({ queryKey: ["public-projects"] }),
    ]);
  };

  const saveArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    setSaving(true);
    const payload = {
      title: articleDraft.title.trim(),
      slug: slugify(articleDraft.slug || articleDraft.title),
      excerpt: articleDraft.excerpt.trim(),
      content: articleDraft.content,
      date: articleDraft.date,
      read_time: articleDraft.readTime.trim(),
      tags: commaSeparated(articleDraft.tags),
      image: articleDraft.image.trim(),
      author_name: articleDraft.author.trim(),
      author_avatar: articleDraft.authorAvatar.trim(),
      related_posts: commaSeparated(articleDraft.relatedPosts),
    };
    try {
      const { error } = editingId
        ? await supabase.from("blog_posts").update(payload).eq("id", editingId)
        : await supabase.from("blog_posts").insert(payload);
      if (error) throw error;
      await refreshContent();
      toast.success(editingId ? "Articolul a fost actualizat." : "Articolul a fost publicat.");
      startNew("article");
    } catch (error) {
      toast.error(`Articolul nu a putut fi salvat: ${error instanceof Error ? error.message : "Eroare necunoscută"}`);
    } finally {
      setSaving(false);
    }
  };

  const saveProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    setSaving(true);
    const payload = {
      title: projectDraft.title.trim(),
      slug: slugify(projectDraft.slug || projectDraft.title),
      short_description: projectDraft.shortDescription.trim(),
      full_description: projectDraft.fullDescription,
      tech: commaSeparated(projectDraft.tech),
      image: projectDraft.image.trim(),
      github_url: projectDraft.githubUrl.trim(),
      live_url: projectDraft.liveUrl.trim(),
      featured: projectDraft.featured,
      category: projectDraft.category,
      date: projectDraft.date,
    };
    try {
      const { error } = editingId
        ? await supabase.from("projects").update(payload).eq("id", editingId)
        : await supabase.from("projects").insert(payload);
      if (error) throw error;
      await refreshContent();
      toast.success(editingId ? "Proiectul a fost actualizat." : "Proiectul a fost publicat.");
      startNew("project");
    } catch (error) {
      toast.error(`Proiectul nu a putut fi salvat: ${error instanceof Error ? error.message : "Eroare necunoscută"}`);
    } finally {
      setSaving(false);
    }
  };

  const deleteContent = async (contentKind: ContentKind, id: string, title: string) => {
    if (!supabase || !window.confirm(`Sigur vrei să ștergi „${title}”?`)) return;
    const { error } = contentKind === "article"
      ? await supabase.from("blog_posts").delete().eq("id", id)
      : await supabase.from("projects").delete().eq("id", id);
    if (error) {
      toast.error(`Conținutul nu a putut fi șters: ${error.message}`);
      return;
    }
    try {
      await refreshContent();
      if (editingId === id) startNew(contentKind);
      toast.success("Conținutul a fost șters.");
    } catch (error) {
      toast.error(`Conținutul a fost șters, dar lista nu s-a putut reîmprospăta: ${error instanceof Error ? error.message : "Eroare necunoscută"}`);
    }
  };

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(`Autentificarea a eșuat: ${error.message}`);
      return;
    }
    setUser(data.user);
    setPassword("");
  };

  const signOut = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(`Deconectarea a eșuat: ${error.message}`);
    else {
      setUser(null);
      startNew("article");
    }
  };

  if (!isSupabaseConfigured) {
    return (
      <main className="min-h-screen section-container flex items-center justify-center">
        <div className="max-w-lg rounded-xl border border-border bg-card p-8 text-center">
          <h1 className="mb-3 text-2xl font-bold">Admin indisponibil</h1>
          <p className="text-muted-foreground">Configurează VITE_SUPABASE_URL și VITE_SUPABASE_PUBLISHABLE_KEY în fișierul .env pentru a activa autentificarea și publicarea.</p>
        </div>
      </main>
    );
  }

  if (checkingSession) {
    return <main className="min-h-screen section-container flex items-center justify-center text-muted-foreground">Se verifică sesiunea...</main>;
  }

  if (!user) {
    return (
      <main className="min-h-screen section-container flex items-center justify-center py-16">
        <form onSubmit={signIn} className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card/80 p-8 shadow-xl">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Newspaper />
            </div>
            <h1 className="text-3xl font-bold">Panou de administrare</h1>
            <p className="mt-2 text-muted-foreground">Autentifică-te pentru a gestiona articolele și proiectele.</p>
          </div>
          <Field label="Email">
            <Input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </Field>
          <Field label="Parolă">
            <Input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </Field>
          <Button type="submit" className="w-full">Autentificare</Button>
        </form>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen section-container flex items-center justify-center py-16">
        <div className="w-full max-w-md space-y-5 rounded-xl border border-border bg-card/80 p-8 text-center">
          <h1 className="text-2xl font-bold">Acces neautorizat</h1>
          <p className="text-muted-foreground">
            Contul <span className="font-medium text-foreground">{user.email}</span> nu are rolul de administrator.
            Atribuie rolul <code>admin</code> acestui cont în Supabase, apoi deconectează-te și autentifică-te din nou.
          </p>
          <Button variant="outline" onClick={() => void signOut()}><LogOut /> Deconectare</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen section-container py-12 md:py-16">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-primary">Conectat ca {user.email}</p>
          <h1 className="text-3xl font-bold md:text-4xl">Administrare conținut</h1>
        </div>
        <Button variant="outline" onClick={() => void signOut()}><LogOut /> Deconectare</Button>
      </header>

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
        <section className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Button variant={kind === "article" ? "default" : "outline"} onClick={() => startNew("article")}>
              <Plus /> Articol nou
            </Button>
            <Button variant={kind === "project" ? "default" : "outline"} onClick={() => startNew("project")}>
              <Plus /> Proiect nou
            </Button>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-5">
            <h2 className="mb-4 text-xl font-semibold">Articole ({articles.length})</h2>
            {loadingContent ? <p className="text-muted-foreground">Se încarcă...</p> : (
              <div className="space-y-3">
                {articles.map((article) => (
                  <div key={article.id} className="flex items-center justify-between gap-3 rounded-lg border border-border/70 p-3">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{article.title}</p>
                      <p className="text-xs text-muted-foreground">/blog/{article.slug}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Button variant="ghost" size="icon" aria-label={`Editează ${article.title}`} onClick={() => editArticle(article)}><Pencil /></Button>
                      <Button variant="ghost" size="icon" aria-label={`Șterge ${article.title}`} onClick={() => void deleteContent("article", article.id, article.title)}><Trash2 className="text-destructive" /></Button>
                    </div>
                  </div>
                ))}
                {!articles.length && <p className="text-sm text-muted-foreground">Nu ai publicat încă articole din admin.</p>}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-5">
            <h2 className="mb-4 text-xl font-semibold">Proiecte ({projects.length})</h2>
            {loadingContent ? <p className="text-muted-foreground">Se încarcă...</p> : (
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between gap-3 rounded-lg border border-border/70 p-3">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{project.title}</p>
                      <p className="text-xs text-muted-foreground">/projects/{project.slug}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Button variant="ghost" size="icon" aria-label={`Editează ${project.title}`} onClick={() => editProject(project)}><Pencil /></Button>
                      <Button variant="ghost" size="icon" aria-label={`Șterge ${project.title}`} onClick={() => void deleteContent("project", project.id, project.title)}><Trash2 className="text-destructive" /></Button>
                    </div>
                  </div>
                ))}
                {!projects.length && <p className="text-sm text-muted-foreground">Nu ai publicat încă proiecte din admin.</p>}
              </div>
            )}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-card/60 p-5 md:p-6">
          <h2 className="mb-6 text-xl font-semibold">
            {editingId ? "Editează" : "Adaugă"} {kind === "article" ? "articol" : "proiect"}
          </h2>
          {kind === "article" ? (
            <form onSubmit={saveArticle} className="space-y-4">
              <Field label="Titlu"><Input value={articleDraft.title} onChange={(event) => setArticleDraft((draft) => ({ ...draft, title: event.target.value, slug: editingId ? draft.slug : slugify(event.target.value) }))} required /></Field>
              <Field label="Slug"><Input value={articleDraft.slug} onChange={(event) => setArticleDraft((draft) => ({ ...draft, slug: slugify(event.target.value) }))} required /></Field>
              <Field label="Descriere scurtă"><Textarea rows={2} value={articleDraft.excerpt} onChange={(event) => setArticleDraft((draft) => ({ ...draft, excerpt: event.target.value }))} required /></Field>
              <Field label="Conținut (HTML)"><Textarea rows={12} value={articleDraft.content} onChange={(event) => setArticleDraft((draft) => ({ ...draft, content: event.target.value }))} required /></Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Data"><Input type="date" value={articleDraft.date} onChange={(event) => setArticleDraft((draft) => ({ ...draft, date: event.target.value }))} required /></Field>
                <Field label="Timp de citire"><Input value={articleDraft.readTime} onChange={(event) => setArticleDraft((draft) => ({ ...draft, readTime: event.target.value }))} /></Field>
              </div>
              <Field label="Etichete (separate prin virgulă)"><Input value={articleDraft.tags} onChange={(event) => setArticleDraft((draft) => ({ ...draft, tags: event.target.value }))} /></Field>
              <Field label="Imagine (URL)"><Input type="url" value={articleDraft.image} onChange={(event) => setArticleDraft((draft) => ({ ...draft, image: event.target.value }))} /></Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Autor"><Input value={articleDraft.author} onChange={(event) => setArticleDraft((draft) => ({ ...draft, author: event.target.value }))} /></Field>
                <Field label="Avatar autor (URL)"><Input value={articleDraft.authorAvatar} onChange={(event) => setArticleDraft((draft) => ({ ...draft, authorAvatar: event.target.value }))} /></Field>
              </div>
              <Field label="Articole similare (slug-uri separate prin virgulă)"><Input value={articleDraft.relatedPosts} onChange={(event) => setArticleDraft((draft) => ({ ...draft, relatedPosts: event.target.value }))} /></Field>
              <Button type="submit" disabled={saving} className="w-full"><Save /> {saving ? "Se salvează..." : editingId ? "Salvează modificările" : "Publică articolul"}</Button>
            </form>
          ) : (
            <form onSubmit={saveProject} className="space-y-4">
              <Field label="Titlu"><Input value={projectDraft.title} onChange={(event) => setProjectDraft((draft) => ({ ...draft, title: event.target.value, slug: editingId ? draft.slug : slugify(event.target.value) }))} required /></Field>
              <Field label="Slug"><Input value={projectDraft.slug} onChange={(event) => setProjectDraft((draft) => ({ ...draft, slug: slugify(event.target.value) }))} required /></Field>
              <Field label="Descriere scurtă"><Textarea rows={3} value={projectDraft.shortDescription} onChange={(event) => setProjectDraft((draft) => ({ ...draft, shortDescription: event.target.value }))} required /></Field>
              <Field label="Descriere completă (HTML)"><Textarea rows={10} value={projectDraft.fullDescription} onChange={(event) => setProjectDraft((draft) => ({ ...draft, fullDescription: event.target.value }))} required /></Field>
              <Field label="Tehnologii (separate prin virgulă)"><Input value={projectDraft.tech} onChange={(event) => setProjectDraft((draft) => ({ ...draft, tech: event.target.value }))} /></Field>
              <Field label="Imagine (URL)"><Input type="url" value={projectDraft.image} onChange={(event) => setProjectDraft((draft) => ({ ...draft, image: event.target.value }))} required /></Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="GitHub URL"><Input type="url" value={projectDraft.githubUrl} onChange={(event) => setProjectDraft((draft) => ({ ...draft, githubUrl: event.target.value }))} /></Field>
                <Field label="Demo URL"><Input type="url" value={projectDraft.liveUrl} onChange={(event) => setProjectDraft((draft) => ({ ...draft, liveUrl: event.target.value }))} /></Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Categorie">
                  <select className="h-10 rounded-md border border-input bg-background px-3" value={projectDraft.category} onChange={(event) => setProjectDraft((draft) => ({ ...draft, category: event.target.value }))}>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="other">Altele</option>
                  </select>
                </Field>
                <Field label="Data"><Input type="date" value={projectDraft.date} onChange={(event) => setProjectDraft((draft) => ({ ...draft, date: event.target.value }))} required /></Field>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={projectDraft.featured} onChange={(event) => setProjectDraft((draft) => ({ ...draft, featured: event.target.checked }))} />
                Proiect recomandat
              </label>
              <Button type="submit" disabled={saving} className="w-full"><Save /> {saving ? "Se salvează..." : editingId ? "Salvează modificările" : "Publică proiectul"}</Button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
};

export default Admin;
