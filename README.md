# lörem ipsum
Lörem Ipsum - generated faux Swedish for the masses! 

Small svelte app for showcasing the npm package `loerem`.

Usage: 
```
npm install loerem

import lörem from "loerem";
console.log(lörem());
```
https://loremipsum-svelte.vercel.app/

Comes with a multitude of options:

- Number of paragraphs generated
- Sentences per paragraph
- Max sentence length
- Minimum sentence length
- Amount of new Swedish words
- Amount of faux academic neologisms
- Amount of names (based on 100 most common Swedish first names/surnames)
- Amount of digital marketing buzzwords
- Option to add a punchline ending random paragraphs
- Format as headline
- Generate names only
- Option to begin with "Lörem ipsum..."

Takes a `settings` object wih these properties (all optional):

```
{
	numberOfParagraphs = 1,
	sentencesPerParagraph = 10,
	maxSentenceLength = 10,
	minSentenceLength = 1,
	isHeadline = false,
	isName = false,
	nyordFrequency = .1,
	neologismerFrequency = .05,
	namnFrequency = 0,
	buzzFrequency = 0,
	useLörem = true,
	punchline = 'Du kan vara drabbad.',
	wrapInDiv = false,
	paragraphStartWrap = '<p>',
	paragraphEndWrap = '</p>',
	alwaysWrapParagraph = false
}
```