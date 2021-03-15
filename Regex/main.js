//////////////////////Exercise 1 ///////////////////////////////////////////////
// var Regex_Pattern = 'hackerrank';

//////////////////////Exercise 2////////////////////////////////////////////////

// var Regex_Pattern = /\d\d\D\d\d\D\d\d\d\d/;

/////////////////////Exercise 3 ///////////////////////////////////////////////

// var Regex_Pattern = /\w{3}\W\w{10}\W\w{3}/;


////////////////////Exercise 4 ///////////////////////////////////////////////////

//   var Regex_Pattern = /^\d\w{4}\.$/;

////////////////////Exercise 5 ///////////////////////////////////////////////////

// var Regex_Pattern = /^\d{1,2}[a-zA-Z]{3,}\.{0,3}$/;


////////////////////Exercise 6 //////////////////////////////////////////////////
// Split the Phone Numbers

 
// function processData(input) {
//         //Enter your code here
//         let phoneNumberRegex = /\n(\d{1,3})[-\s](\d{1,3})[-\s](\d{4,10})/g;
        
//         while (match = phoneNumberRegex.exec(input)) {
//         console.log(`CountryCode=${match[1]},LocalAreaCode=${match[2]},Number=${match[3]}`);
//         }
//     } 




//////////////////////Exercise 7 ////////////////////////////////////////////////
// Detect HTML Tags


// const text = `<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
// <div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>`;

// const text1 = `<div id="mp-other" style="padding-top:4px; padding-bottom:2px;">
// <h2><span class="mw-headline" id="Other_areas_of_Wikipedia">Other areas of Wikipedia</span></h2>
// <ul>
// <li><b><a href="/wiki/Wikipedia:Community_portal" title="Wikipedia:Community portal">Community portal</a></b>  Bulletin board, projects, resources and activities covering a wide range of Wikipedia areas.</li>
// <li><b><a href="/wiki/Wikipedia:Help_desk" title="Wikipedia:Help desk">Help desk</a></b>  Ask questions about using Wikipedia.</li>
// <li><b><a href="/wiki/Wikipedia:Local_Embassy" title="Wikipedia:Local Embassy">Local embassy</a></b>  For Wikipedia-related communication in languages other than English.</li>
// <li><b><a href="/wiki/Wikipedia:Reference_desk" title="Wikipedia:Reference desk">Reference desk</a></b>  Serving as virtual librarians, Wikipedia volunteers tackle your questions on a wide range of subjects.</li>
// <li><b><a href="/wiki/Wikipedia:News" title="Wikipedia:News">Site news</a></b>  Announcements, updates, articles and press releases on Wikipedia and the Wikimedia Foundation.</li>
// <li><b><a href="/wiki/Wikipedia:Village_pump" title="Wikipedia:Village pump">Village pump</a></b>  For discussions about Wikipedia itself, including areas for technical issues and policies.</li>
// </ul>
// </div>`;

// function processData(input) {
//         //Enter your code here
//         const regex = /(<([^>]+)>)/gi;
//         let tagsArr = input.match(regex);
//     // console.log(tagsArr);
//     let tagNames = [];
//     for (let i = 0; i < tagsArr.length; i++) {
//         let regex2 = /\w+/;
//         let tagName = tagsArr[i].match(regex2).shift();
//         // let tagNames = [];
//         tagNames.push(tagName);
//     }
    
//     // console.log(tagNames);
//     // tagsNames.push(tagsArr[i].match(regex2));
    
//     let uniqueValuesArr = tagNames.filter((v, i, a) => a.indexOf(v) === i).sort();
//     let finalString = uniqueValuesArr.toString().replace(/,/g, ';');
//     console.log(finalString);
// }


//////////////////////////////////////////////////////////////////////////////////
/////////////////////Exercise 8 ==================================================
// Detect HTML Attributes


// const input = `<div id="mp-other" style="padding-top:4px; padding-bottom:2px;">
// <h2><span class="mw-headline" id="Other_areas_of_Wikipedia">Other areas of Wikipedia</span></h2>
// <ul>
// <li><b><a href="/wiki/Wikipedia:Community_portal" title="Wikipedia:Community portal">Community portal</a></b>  Bulletin board, projects, resources and activities covering a wide range of Wikipedia areas.</li>
// <li><b><a href="/wiki/Wikipedia:Help_desk" title="Wikipedia:Help desk">Help desk</a></b>  Ask questions about using Wikipedia.</li>
// <li><b><a href="/wiki/Wikipedia:Local_Embassy" title="Wikipedia:Local Embassy">Local embassy</a></b>  For Wikipedia-related communication in languages other than English.</li>
// <li><b><a href="/wiki/Wikipedia:Reference_desk" title="Wikipedia:Reference desk">Reference desk</a></b>  Serving as virtual librarians, Wikipedia volunteers tackle your questions on a wide range of subjects.</li>
// <li><b><a href="/wiki/Wikipedia:News" title="Wikipedia:News">Site news</a></b>  Announcements, updates, articles and press releases on Wikipedia and the Wikimedia Foundation.</li>
// <li><b><a href="/wiki/Wikipedia:Village_pump" title="Wikipedia:Village pump">Village pump</a></b>  For discussions about Wikipedia itself, including areas for technical issues and policies.</li>
// </ul>
// </div>`;


// function processData(input) {
//         //Enter your code here
//         let tags = {} ///empty object created
//     input.match(/<(?!\/).*?>/g) 
//       .sort() 
//       .forEach(item => {
//         item = item.replace(/([</>])|(=.*?["'][ >])/g, ' ')
//           .trim() 
//           .split(' '); //
        
//         if(!tags[item[0]]) 
//           tags[item[0]] = {};
//         item.slice(1).forEach(attr => tags[item[0]][attr] = '');
//       });
    
//     for(let item in tags)
//       console.log(item + ':' + Object.keys(tags[item]).sort().join(','));
//     } 


//////////////////////////////////////////// Exercise 9 ////////////////////////////////////////////
///Detect HTML links

// const input = `<div id="mp-other" style="padding-top:4px; padding-bottom:2px;">
// <h2><span class="mw-headline" id="Other_areas_of_Wikipedia">Other areas of Wikipedia</span></h2>
// <ul>
// <li><b><a href="/wiki/Wikipedia:Community_portal" title="Wikipedia:Community portal">Community portal</a></b>  Bulletin board, projects, resources and activities covering a wide range of Wikipedia areas.</li>
// <li><b><a href="/wiki/Wikipedia:Help_desk" title="Wikipedia:Help desk">Help desk</a></b>  Ask questions about using Wikipedia.</li>
// <li><b><a href="/wiki/Wikipedia:Local_Embassy" title="Wikipedia:Local Embassy">Local embassy</a></b>  For Wikipedia-related communication in languages other than English.</li>
// <li><b><a href="/wiki/Wikipedia:Reference_desk" title="Wikipedia:Reference desk">Reference desk</a></b>  Serving as virtual librarians, Wikipedia volunteers tackle your questions on a wide range of subjects.</li>
// <li><b><a href="/wiki/Wikipedia:News" title="Wikipedia:News">Site news</a></b>  Announcements, updates, articles and press releases on Wikipedia and the Wikimedia Foundation.</li>
// <li><b><a href="/wiki/Wikipedia:Village_pump" title="Wikipedia:Village pump">Village pump</a></b>  For discussions about Wikipedia itself, including areas for technical issues and policies.</li>
// </ul>
// </div>`;

// function processData(input) {
//         //Enter your code here
//         let regex=/<a.*?href="(.*?)".*?>(.*?)<\/a>/ig;
//         let output=[];
//         input.replace(regex,function(_,href,text){ 
//             output.push(href.trim() + ',' + text.replace(/<.*?>/g,'').trim())
//         });
//         console.log(output.join('\n'));
            
//     } 

/////////////////////////////////////////Exercise 10 ////////////////////////////////////////////////
///Detect Emails

// const input = `HackerRank is more than just a company
// We are a tight group of hackers, bootstrappers, entrepreneurial thinkers and innovators. We are building an engaged community of problem solvers. Imagine the intelligence and value that a room would hold if it contained hackers/problem solvers from around the world? We're building this online.
// Hypothesis: Every hacker loves a particular type of challenge presented in a certain set of difficulty. If we build a large collection of real world challenges in different domains with an engaging interface, it is going to be incredible! Join us to create history.
// Available Positions
// Product Hacker product@hackerrank.com
// Challenge Curator
// Product Evangelist
// Product Designer
// Content Creator
// ACM World Finals Hacker
// Backend C++ Hacker
// Mail us at hackers@hackerrank.com to chat more. Or you can write to us at interviewstreet@hackerrank.com!
// HACKERRANK PERKS
// Working for a startup is hard work, but there are plenty of benefits of working for a small, fun, growing team.
// [Image] Perk: Get tools for the jobAll the Right ToolsWe know that everyone's perfect workspace is unique to them. We will get you set up with whatever equipment you need to start hacking - a new 15” Macbook Pro or iMac, or a computer of your choice plus a display if you need it. Additionally, if you require any software or other tools, we've got it covered.[Image] Perk: Flexible HoursFlexible HoursBecause we work so hard, we encourage our employees to keep flexible hours and don't require them to track their time. A morning scrum and open communication ensures that the job gets done on time, and we rely on the honor system so that you can work on your own pace.[Image] Perk: HealthcareWellness SupportTo work hard, you have to be healthy. We will cover your health, dental, and visual insurance with no wait period. That means instant benefits from the day you're hired.[Image] Perk: Choice of LocationLocation, Location, LocationWe are the first Indian company to be backed by Y-Combinator, and as a result we have a thriving office in Bangalore and a growing office in Mountain View, CA. Depending on your residency or visa status, we will get you situated in one of our two offices, both of which are located in the heart of their country's tech industry.[Image] Perk: Choice of LocationCreative SupportIf you have a cool side project that you want to launch, we will pay for EC2/heroku servers to get it off the ground. Side projects fuel creativity and learning, which are crucial to the HackerRank culture.
// CULTURE
// The culture of a startup is reflective of the founders’ DNA. Larry Page & Sergey Brin were PhD’s from Stanford and that’s why Google is filled with high scoring graders from top schools and is very hard to get in if you’re not a CS major. Similarly, the hacker culture at Facebook is inspired by Zuckerberg, a hacker, the design culture by Steve Jobs and so on.
// The adjective to describe the environment/founders here is relentless hardworkers. It might be a general trait of a startup but I’m pretty sure it’s a notch higher here and defines the culture. This is what has taken us this far. It’s not working in weekends or allnighters that count, but the effort that goes into building something intellectually engaging for hackers and making it fun is high.
// You’ll have to embrace randomness and chaos. There’s some level of discipline (eg: daily scrums) but only so much. We push boundaries everyday, stretch our limits but no one complains because there’s a feeling of doing something great at the end of the day, every single day.`

// function processData(input) {
//         //Enter your code here
//         const regex = /[\w\.]*@(?:\w*\.)+\w*\b/gi;
//         let arr = input.match(regex);
//         // console.log(arr);
//        let uniqueValuesArr = arr.filter((v, i, a) => a.indexOf(v) === i).sort();
//        let finalString = uniqueValuesArr.toString().replace(/,/g, ';');
//         console.log(finalString);
// }


///////////////////////////////////Exercise 11 ////////////////////////
/// Detect the Domain Name

// const input = `<div class="reflist" style="list-style-type: decimal;">
// <ol class="references">
// <li id="cite_note-1"><span class="mw-cite-backlink"><b>^ ["Train (noun)"](http://www.askoxford.com/concise_oed/train?view=uk). <i>(definition – Compact OED)</i>. Oxford University Press<span class="reference-accessdate">. Retrieved 2008-03-18</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Train+%28noun%29&rft.genre=article&rft_id=http%3A%2F%2Fwww.askoxford.com%2Fconcise_oed%2Ftrain%3Fview%3Duk&rft.jtitle=%28definition+%E2%80%93+Compact+OED%29&rft.pub=Oxford+University+Press&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
// <li id="cite_note-2"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Atchison, Topeka and Santa Fe Railway (1948). <i>Rules: Operating Department</i>. p. 7.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.aulast=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.btitle=Rules%3A+Operating+Department&rft.date=1948&rft.genre=book&rft.pages=7&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
// <li id="cite_note-3"><span class="mw-cite-backlink"><b>^ [Hydrogen trains](http://www.hydrogencarsnow.com/blog2/index.php/hydrogen-vehicles/i-hear-the-hydrogen-train-a-comin-its-rolling-round-the-bend/)</span></li>
// <li id="cite_note-4"><span class="mw-cite-backlink"><b>^ [Vehicle Projects Inc. Fuel cell locomotive](http://www.bnsf.com/media/news/articles/2008/01/2008-01-09a.html)</span></li>
// <li id="cite_note-5"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Central Japan Railway (2006). <i>Central Japan Railway Data Book 2006</i>. p. 16.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Central+Japan+Railway&rft.aulast=Central+Japan+Railway&rft.btitle=Central+Japan+Railway+Data+Book+2006&rft.date=2006&rft.genre=book&rft.pages=16&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
// <li id="cite_note-6"><span class="mw-cite-backlink"><b>^ ["Overview Of the existing Mumbai Suburban Railway"](http://web.archive.org/web/20080620033027/http://www.mrvc.indianrail.gov.in/overview.htm). _Official webpage of Mumbai Railway Vikas Corporation_. Archived from [the original](http://www.mrvc.indianrail.gov.in/overview.htm) on 2008-06-20<span class="reference-accessdate">. Retrieved 2008-12-11</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Overview+Of+the+existing+Mumbai+Suburban+Railway&rft.genre=article&rft_id=http%3A%2F%2Fwww.mrvc.indianrail.gov.in%2Foverview.htm&rft.jtitle=Official+webpage+of+Mumbai+Railway+Vikas+Corporation&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
// </ol>
// </div>`


// function processData(input) {
   
//         //Enter your code here
//         const regex = /https?:\/\/(ww[w2]\.|web\.)?([-\w.]+\.[a-z]+)/gi;
    
//     let arr = input.match(regex);
//     // console.log(arr);
    
//     let newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         let domainName = arr[i].replace(/https?:\/\/(ww[w2]\.)?/g, '');
//         // console.log(typeof domainName);
//         newArr.push(domainName);
//     }
//     let uniqueValuesArr = newArr.filter((v, i, a) => a.indexOf(v) === i).sort();
//     let finalString = uniqueValuesArr.toString().replace(/,/g, ';');
//     console.log(finalString);
// }


/////////////////////////////////////Exercise 12 ////////////////////////////
/////Identifying single-line and Multi-line Comments


// const input = `#include<stdio.h>
// #include<stdlib.h>
// typedef struct Node
// {
//         int data;
//         struct Node *next;
//         struct Node *prev;
// }node;
// void insert(node *pointer, int data)
// {
//         /* Iterate through the list till we encounter the last node.*/
//         while(pointer->next!=NULL)
//         {
//                 pointer = pointer -> next;
//         }
//         /* Allocate memory for the new node and put data in it.*/
//         pointer->next = (node *)malloc(sizeof(node));
//         (pointer->next)->prev = pointer;
//         pointer = pointer->next;
//         pointer->data = data;
//         pointer->next = NULL;
// }
// int find(node *pointer, int key)
// {
//         pointer =  pointer -> next; //First node is dummy node.
//         /* Iterate through the entire linked list and search for the key. */
//         while(pointer!=NULL)
//         {
//                 if(pointer->data == key) //key is found.
//                 {
//                         return 1;
//                 }
//                 pointer = pointer -> next;//Search in the next node.
//         }
//         /*Key is not found */
//         return 0;
// }
// void delete(node *pointer, int data)
// {
//         /* Go to the node for which the node next to it has to be deleted */
//         while(pointer->next!=NULL && (pointer->next)->data != data)
//         {
//                 pointer = pointer -> next;
//         }
//         if(pointer->next==NULL)
//         {
//                 printf("Element %d is not present in the list\n",data);
//                 return;
//         }
//         /* Now pointer points to a node and the node next to it has to be removed */
//         node *temp;
//         temp = pointer -> next;
//         /*temp points to the node which has to be removed*/
//         pointer->next = temp->next;
//         temp->prev =  pointer;
//         /*We removed the node which is next to the pointer (which is also temp) */
//         free(temp);
//         /* Beacuse we deleted the node, we no longer require the memory used for it .
//            free() will deallocate the memory.
//          */
//         return;
// }
// void print(node *pointer)
// {
//         if(pointer==NULL)
//         {
//                 return;
//         }
//         printf("%d ",pointer->data);
//         print(pointer->next);
// }
// int main()
// {
//         /* start always points to the first node of the linked list.
//            temp is used to point to the last node of the linked list.*/
//         node *start,*temp;
//         start = (node *)malloc(sizeof(node));
//         temp = start;
//         temp -> next = NULL;
//         temp -> prev = NULL;
//         /* Here in this code, we take the first node as a dummy node.
//            The first node does not contain data, but it used because to avoid handling special cases
//            in insert and delete functions.
//          */
//         printf("1. Insert\n");
//         printf("2. Delete\n");
//         printf("3. Print\n");
//         printf("4. Find\n");
//         while(1)
//         {
//                 int query;
//                 scanf("%d",&query);
//                 if(query==1)
//                 {
//                         int data;
//                         scanf("%d",&data);
//                         insert(start,data);
//                 }
//                 else if(query==2)
//                 {
//                         int data;
//                         scanf("%d",&data);
//                         delete(start,data);
//                 }
//                 else if(query==3)
//                 {
//                         printf("The list is ");
//                         print(start->next);
//                         printf("\n");
//                 }
//                 else if(query==4)
//                 {
//                         int data;
//                         scanf("%d",&data);
//                         int status = find(start,data);
//                         if(status)
//                         {
//                                 printf("Element Found\n");
//                         }
//                         else
//                         {
//                                 printf("Element Not Found\n");

//                         }
//                 }
//         }


// }`;

// function processData(input) {
//         //Enter your code here
//         const regex = /(\/\/.*)|(\/{1,2}\*(.*\n)*?.*\*{1,2}\/)/gm;
    
//         let arr = input.match(regex);
//         // console.log(arr);
//         let newArr = arr.join('\n');
//         let finalString = newArr.replace(/\n\s+/g, `\n`);
//         console.log(finalString);
// } 
    
