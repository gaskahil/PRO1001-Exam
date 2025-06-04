# FRAM - A local Food Delivery System

## Project Description
For my exam in Frontend Essentials at Oslos Nye Høyskole, I was tasked with recreating a website for a food delivery system named FRAM. This task includes a panel menu, a spesific layout to recreate, an AI driven chatbot that uses an API key, an API driven map and a page displaying more produce. Using **HTML**, **CSS** and **Javascript**, this repository is the end result for the exam.

## Setup
Before testing the chatbot, make sure you open the script folder and chatbot.js file. At the top of the js file, you can update where the OpenAI is imported from, and your API key.
```
import OpenAI from "https://esm.sh/openai";

//Declare apiKey 
const openai = new OpenAI({
    apiKey: "YOUR_API_KEY"
});
```
In the same folder, you can open the apimap.js file and add your Google Maps API:
```
// Map API KEY
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
```
I have included code for the map API key so it can be left as is, and the page will load fine with a placeholder image named mapPin.png.

## Work Progress
I started by making the HTML code for the main page, named skeleton.html, and since I didn't have a clear idea in mind for how to make the panel menu, as displayed in the project description, I found a youtube video which I'll include in my External resources. 
I wish I had separated my css code into several documents as I worked. I have spent some time later divying that up, but I hope to never make the same mistake again. I've divided my javascript elements as well, as there is no need for the API map to be available on pages where it isn't used. <br/>
I do enjoy being able to compare my work and see how things look, but to avoid having to reload a page and scroll all the way down to the elements I'm currently working on, I made the **testPartOne.html** file. It started with testing the setup for the background, logo and text snippet, but has been used to run through all elements, giving me a quick overview of the code I'm working on.

## External resources:
[Youtube Video](https://youtu.be/FeAhHPaGyVA?si=iWpvvqc3_b-YROfD) to help with panel menu. This also linked to a lot of icons. <br/>
[Icon Library](https://fonts.google.com/icons) I found a lot of icons here. This was also linked in the above video. <br/>
[Google Map API Help](https://www.dilate.com.au/blog/how-to-set-up-google-maps-api-a-step-by-step-guide/) To help start making the Google Map API setup, I looked here for help. <br/>
[MAP API Explained](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) To look deeper into the code required to set up a Map API, I used Google's own tutorial to explain more. <br/>
[README styling](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) I don't have much experience writing a README document, so having this page open helps a lot. <br/>
[MDN Webdocs](https://developer.mozilla.org/en-US/) For helpful solutions to problems. <br/>
[W3Schools](https://www.w3schools.com/) Helpful guide to look for options to my problems. <br/>

## Future Improvements
To make these pages function better in the future, I would add Javascript code that adds produce to the basket indicated in the top right on the navigation bar. I would also make it so the Navigation bar would either be locked at the top of the screen at all times, or easy to call on with hover or a quick scroll up. <br/>
Another feature I think should be implemented for a project like this is an option to select your location, which will, based on the selected location the user chooses, gives them options of produce to pick from. 


## Tasks remaining:
- chatbot
   - clean up code
   - FRAM name showcasing when it sends a message.
- "add to basket" button on main page
- resize the pixels for THIS IS HOW IT WORKS up to 788px

Chatbot, the way I have set up the API key, cannot be used in the run option page provided through Visual Studio Code. Troubleshooting through other programs have been done to test the setup.
