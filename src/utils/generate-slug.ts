export function generateSlug(text: string): string{
    return text
    .normalize("NFC")
    .replace(/[|u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}