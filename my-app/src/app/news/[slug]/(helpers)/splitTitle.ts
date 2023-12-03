export const splitTitle = (title: string) => {
   const words = title.split(' ')
   const wordsNumber = words.length
   return [words.slice(0, wordsNumber/2), words.slice(wordsNumber/2, wordsNumber)] 
}