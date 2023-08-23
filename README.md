![msg stories](https://docs.google.com/drawings/d/e/2PACX-1vQLOo1p7K6zdGbUDlpC5aU6lNgXD-QJWY1fhAxFY6wU91ZYdJ_Eh75BlBq2Qjc2suAchlipSrnm9k3k/pub?w=576&h=144 "MSG STORIES")  
=
An AI experiment
## The What
*msg stories* is an experiment: given the simplest possible constraints, can a LLM write in a distinctly creative and human way?  
LLMs like ChatGPT are, obviously algorithmic and therefore not truly intelligent. And that shows in their writing - it's very obvious when something has been written by an AI.  
But what if we gave an AI such simple terms that it didn't have time to fall to its many common follies?  
So...
## The How
Every story in this experiment is presented as a series of text messages.  
Why? Because text messages are concise, informal, and shallow.  
Our LLM (in this case ChatGPT using GPT 3.5) need not create depth nor will it have the chance to go into a repeating cycle of nonsense.  
And because these are fictional stories, there isn't anywhere for there to be false facts, or ideas pulled out of thin air.
## The Conclusion
The conclusions one might come to with this experiment are multifaceted. The main points are:  
- Sometimes, there's an actual, real spark of creativity. See this [story](https://www.rockwill.dev/msg-stories/?story=4) where our LLM incorporated an aside about a scarf to create a legitimately creative romance.
- GPT 3.5 is very bad at following constraints. This isn't really a conclusion about LLMs in general, but GPT 3.5 really, really sucks at outputting properly formatted, constraint-conforming text. All of this stories are pre-generated and loaded in, since using the API in real time would be both costly and slow. But for every story that's formatted correctly, there's another one that isn't.
- LLMs still suck at humor. This has been a common issue with most modern language models: LLMs are simply, in their current state, incapable of mimicking human humor. This is, in a way, obvious: humans don't find a specific thing funny, nor are there any real patterns. It's naturally hard for an algorithmic model to create humor out of a jumble of words.
- GPT is great at action. It's unclear if this is a quirk of GPT or generalized across LLMs, but the action stories in this catalog are incredible. They have compelling stories, if a little cringe-worthy near the conclusion, and for once, GPT actually abided by show-not-tell.
- Still, there's real potential: this entire catalog took less than an hour to create, and most stories in it are actually ok. Without knowing they were created by AI, a reader would easily assume these were simply fluffy little stories.
## Demo
You can download this project and run it on a file server if you'd like, or you can see a live demo [here](https://rockwill.dev/msg-stories). This project runs completely off of static files, so nearly any hosting service or development server would suffice.
## Licensing
Licensing AI generated works is still complex and ethically ambiguous. So while the HTML, CSS, JS, and other UI code for this project are completely [MIT licensed](https://mit-license.org), I hold no claim over the actual content and stories in this project.
```The MIT License (MIT)
Copyright © 2023 <William Choi-Kim>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.```
