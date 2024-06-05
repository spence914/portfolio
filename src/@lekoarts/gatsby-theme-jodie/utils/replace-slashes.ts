export function replaceSlashes(input: string): string {
  return input.replace(/\/\/+/g, `/`)
}