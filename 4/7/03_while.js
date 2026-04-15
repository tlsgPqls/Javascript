let age=0;
let num=0; // num
while(age <5)
{
    while(num<10)
    {
    console.log(`${age}살입니다.`);
    num+=1;
    }
    num=0;
    age+=1;
}
//횟수 중요하면 for,   상태변화 while
// 처음에 변수 선언을 안하면 돌아가지않음 주의