// variables

const btn = document.querySelector('.btn')
const author = document.querySelector('.person')
const content = document.querySelector('.quotes')

const quotes = [{
    quote: "“Whoever marries his beloved daughter to an innovator has cut off the ties of relationship with her.” [Al-Barbahaaree, An Explanation of the Creed, 137]",
    person: "Fudayl Ibn Iyaad (d. 187) " ,
},
{
    quote: "“May Allaah have mercy over the person who speaks little, reads the Quraan, weeps over his lost time, constantly gazes into (saheeh) Bukhaaree and (saheeh) Musilm, and worships Allaah before he is surprised by death.” [At-Tadhkirah, 2/80]",
    person: "Imaam Adh-Dhahabee" ,
},
{
    quote: "“The shield of the Scholar is, ‘I do not know’, so if he leaves it down, his attacker will strike him.” [Al-Intiqaa’, p. 37]",
    person: "Imaam Maalik" ,
},
{
    quote: "“They used to say: so long as he is following the footsteps (of the Salaf), then he is on the right path.” [Al-Laalkaa’i in Sharh Usool I’tiqaad Ahl as-Sunnah wal-Jamaa’ah]",
    person: "Muhammad ibn Seereen" ,
},
{
    quote: "“You will never be misguided so long as you follow the footsteps [of the Prophet (saw)].” [Ibn Battah in Al-Ibaanah]",
    person: "Abu ad-Darda’ (R.A)" ,
},
{
    quote: "“Every bid’ah is misguidance, even if people think it is good.” [Al-Laalkaa’i in Sharh Usool I’tiqaad Ahl as-Sunnah wal-Jamaa’ah]",
    person: "‘Abdullaah Ibn ‘Umr (R.A)" ,
},
{
    quote: "“The jamaa’ah is whatever agrees with the truth – even if you are alone.” [Reported in Taareekh Dimashq with an authentic chain of narration]",
    person: "Ibn Mas’ood (R.A)" ,
},
{
    quote: "“I am not going to leave anything that the Messenger of Allaah (saw) used to do but I will do it too, because I am afraid that if I leave anything that he used to do, I will go astray.” [Saheeh Muslim, 1759]",
    person: "Aboo Bakr (R.A)" ,
},
{
    quote: "“People will continue to adhere to the correct way so long as they folow the footsteps [of the Prophet (saw)].” [Al-Laalkaa’i in Sharh Usool I’tiqaad Ahl as-Sunnah wal-Jamaa’ah]",
    person: "‘Abd-Allah ibn ‘Umar (R.A) " ,
},
{
    quote: "“The excellence of knowledge is due only to the fact that it causes a person to fear and obey Allaah, otherwise it is just like anything else.” [Related by ibn Rajab]",
    person: "Sufyaan Ath-Thawree " ,
},
{
    quote: "“Follow and do not innovate, for everything has been taken care of, and you must follow the ancient way (i.e., of the Salaf).” [Ad-Daarimi in his Sunan]",
    person: "‘Abdulaah Ibn Mas’ood " ,
},
{
    quote: "“Do not perform any act of worship that was not practised by the Companions of the Messenger of Allah, for the earlier generation did not leave any room for the latter to add anything (to the religion). Fear Allah, O’ readers, seekers of knowledge, and follow the path of those who came before you.” [Narrated by Ibn Battah in Al-Ibaanah]",
    person: "Hudhayfah ibn al-Yamaan (R.A) " ,
},
{
    quote: "“O’ people, you must seek knowledge before it is taken away, for indeed when its people (the scholars) die, it wll be taken away. And beware of bid’ah, innovation and sophistication, and adhere to the ancient way [i.e., the way of the Prophet (saw)].” [Al-Bidaayah wan-Nahy ‘anha by Ibn Waddaah]",
    person: "Mu’aadh ibn Jabal (R.A) " ,
}]

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * quotes.length);

    content.innerText = quotes[random].quote;
    author.innerText = quotes[random].person;
    console.log(random);

})