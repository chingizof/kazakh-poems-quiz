export const poems = [
{
    name: "hello",
    text: "world",
    author: "slim shady"
},
{
    name: "Білімдіден шыққан сөз",
    text: `Білімдіден шыққан сөз\nТалаптыға болсын кез.\nНұрын, сырын көруге,\nКөкірегінде болсын көз.`,
    author: "Абай Құнанбаев"
},
]

for (let i=0;i<2;i++) {
    console.log(poems[i].text)
}