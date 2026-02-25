"use client";

import { useState } from "react";
import { Post, updatePost } from "@/lib/blog-data";

type EditFormProps = {
  post: Post;
  onSaved?: (updatedPost: Post) => void;
  onCancel?: () => void;
};

export default function EditForm({ post, onSaved, onCancel }: EditFormProps) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setErrorMessage("");

    try {
      const updated = await updatePost(post.id, { title, content });
      onSaved?.(updated);
 
    } catch (err) {
      console.error("Update failed", err);
      setErrorMessage(err instanceof Error ? err.message : "Update failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      <div className="flex gap-3">
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save changes"}
        </button>
            <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
