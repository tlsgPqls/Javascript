for(let i=0;i<10;i++)
{
    if(i==2)
    {
        break;
    }
    console.log(`${i} was executed!`);
}
for(let i=0;i<10;i++)
{
    if(i==2)
    {
        continue;
    }
    console.log(`${i} was executed continued!`);
}