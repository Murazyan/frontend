#include<iostream>
#include<windows.h>
#include<ctime>
#include<cstdlib>
void guyn(int color){
    std::cout<<"\033["<<color<<"m";
}

int main(){

         //guyn
    int guyn1;
    int patasxan1;
    std::cout<<"cankanum eq guyn @ntrel"<<std::endl;
    std::cout<<"1-ayo"<<std::endl;
    std::cout<<"2-voch"<<std::endl;
    std::cout<<"@ntrir patasxan-";
    std::cin>>patasxan1;
    if (patasxan1==1){
        std::cout<<"☞︎︎︎𝚛𝚎𝚍=31"<<std::endl;
        std::cout<<"☞︎︎︎𝚐𝚛𝚎𝚎𝚗=32"<<std::endl;
        std::cout<<"☞︎︎︎𝚢𝚎𝚕𝚕𝚘𝚠=33"<<std::endl;
        std::cout<<"☞︎︎︎𝚋𝚕𝚞𝚎=34"<<std::endl;
        std::cout<<"☞︎︎︎𝚖𝚊𝚐𝚎𝚗𝚝𝚊=35"<<std::endl;
        std::cout<<"☞︎︎︎𝚌𝚢𝚊𝚗=36"<<std::endl;
        std::cout<<"☞︎︎︎𝚠𝚑𝚒𝚝𝚎=37"<<std::endl;
        std::cout<<"@𝚗𝚝𝚛𝚎𝚕 𝚐𝚞𝚢𝚗-";
        std::cin>>guyn1;
        guyn(guyn1);
    }
    //guyn
    //start
    int start;
    std::cout<<"cankanum eq sksel xax@"<<std::endl;
    std::cout<<"1-ayo"<<std::endl;
    std::cout<<"2-voch"<<std::endl;
    std::cout<<"@ntrir patasxan-";
    std::cin>>start;
    int yyyy;
    //start
    if(start==1){
        std::cout<<"inchpes eq cankanum xaxal\n";
        std::cout<<"1-erkusov\n";
        std::cout<<"2-miaynak\n";
        std::cout<<"nshel patasxan-";
        std::cin>>yyyy;
        if(yyyy==1){
    //dashter
    char xaxacox1[10][10]={
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'}
       };
             char xaxacox2[10][10]={
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'}
       };
     //dashter
    //naver
    int x;
    int y;
    int xy;
    int navak=0;
  int navak1;
         system("cls");
    for (int i=0;i<5;i++){
        std::cout<<"1 xaxacox"<<std::endl;
        std::cout<<" 0,1,2,3,4,5,6,7,8,9"<<std::endl;
        for(int i=0;i<10;i++){

            std::cout<<i;
            for(int j=0;j<10;j++){
            std::cout<<xaxacox1[i][j]<<" ";
        }
             std::cout<<"\n";
        }
        navak1=navak;
        navak++;

           std::cout<<"\n☞︎︎︎𝚗𝚜𝚑𝚎𝚚 𝚟𝚘𝚝𝚎𝚡 𝚎𝚚 𝚞𝚣𝚞𝚗 𝚝𝚎𝚡𝚊𝚍𝚛𝚎𝚕 𝚍𝚣𝚎𝚛 "<<navak<<"-𝚑𝚊𝚝𝚊𝚗𝚘𝚌 𝚗𝚊𝚟𝚊𝚔@☜︎︎︎"<<std::endl;
            std::cout<<"☞︎︎︎𝚖𝚞𝚝𝚚𝚊𝚐𝚛𝚎𝚕 𝚡-";
            std::cin>>x;
            std::cout<<"☞︎︎︎𝚖𝚞𝚝𝚚𝚊𝚐𝚛𝚎𝚕 𝚢-";
            std::cin>>y;
            if(navak!=1){

            std::cout<<"vor uxutyamb eq uzum lini navak@"<<std::endl;
            std::cout<<"1-uxadzig"<<std::endl;
            std::cout<<"2-horizonakan"<<std::endl;
            std::cout<<"@ntrel patasxan"<<std::endl;
            std::cin>>xy;}
        xaxacox1[x][y]='#';
        int o=0;
        int u=0;
           if(xy==1){
               while(o<navak1){
                   if(x>=5){
                       x--;
                   }
                   else if(x<5){x++;}
                   xaxacox1[x][y]='#';
                   o++;
               }
           }
        if(xy==2){
               while(u<navak1){
                       if(y>=5){
                       y--;
                   }
                   else if(y<5){y++;}
                   xaxacox1[x][y]='#';
                   u++;
               }
           }
    }
        navak=0;
         system("cls");
        for (int i=0;i<5;i++){
            std::cout<<"2 xaxacox"<<std::endl;
        std::cout<<" 0,1,2,3,4,5,6,7,8,9"<<std::endl;
        for(int i=0;i<10;i++){

            std::cout<<i;
            for(int j=0;j<10;j++){
            std::cout<<xaxacox2[i][j]<<" ";
        }

             std::cout<<"\n";
        }
        navak1=navak;
        navak++;

           std::cout<<"\n☞︎︎︎𝚗𝚜𝚑𝚎𝚚 𝚟𝚘𝚝𝚎𝚡 𝚎𝚚 𝚞𝚣𝚞𝚗 𝚝𝚎𝚡𝚊𝚍𝚛𝚎𝚕 𝚍𝚣𝚎𝚛 "<<navak<<"-𝚑𝚊𝚝𝚊𝚗𝚘𝚌 𝚗𝚊𝚟𝚊𝚔@☜︎︎︎"<<std::endl;
            std::cout<<"☞︎︎︎𝚖𝚞𝚝𝚚𝚊𝚐𝚛𝚎𝚕 𝚡-";
            std::cin>>x;
            std::cout<<"☞︎︎︎𝚖𝚞𝚝𝚚𝚊𝚐𝚛𝚎𝚕 𝚢-";
            std::cin>>y;
            if(navak!=1){
            std::cout<<"vor uxutyamb eq uzum lini navak@"<<std::endl;
            std::cout<<"1-horizonakan"<<std::endl;
            std::cout<<"2-uxadzig"<<std::endl;
            std::cout<<"@ntrel patasxan"<<std::endl;
            std::cin>>xy;}
        xaxacox2[x][y]='#';
        int o=0;
        int u=0;
           if(xy==1){
               while(o<navak1){
                  if(x>=5){ x--;}
                   else if(x<5){x++;}
                   xaxacox2[x][y]='#';
                   o++;
               }
           }
        if(xy==2){
               while(u<navak1){
                        if(y>=5){
                       y--;
                   }
                   else if(y<5){y++;}

                   xaxacox2[x][y]='#';
                   u++;
               }
           }}
        //xaxal
      system("cls");
       char xaxacox11[10][10]={
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'}
       };

       char xaxacox22[10][10]={
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'}
       };
                int d=0;
                int n1=0;
                int miavor1=0;
                int miavor2=0;
        system("cls");
        std::cout<<"sksvec xax@"<<std::endl;
                while(d<1){
                    // 1 xaxacox
                    system("cls");
            std::cout<<"krakum e 1 xaxacox@"<<std::endl;
        std::cout<<" 0,1,2,3,4,5,6,7,8,9"<<std::endl;
        for(int i=0;i<10;i++){
            std::cout<<i;
            for(int j=0;j<10;j++){
            std::cout<<xaxacox1[i][j]<<" ";
        }
            std::cout<<"|";
            for(int h=0;h<10;h++){
                std::cout<<xaxacox11[i][h]<<" ";
            }
                 std::cout<<"|";
            for(int h=0;h<10;h++){
                std::cout<<xaxacox22[i][h]<<" ";
            }
             std::cout<<"\n";
        }
                    std::cout<<"mutqagreq x-";
                    std::cin>>x;
                    std::cout<<"mutqagreq y-";
                    std::cin>>y;
                    if(xaxacox2[x][y]=='#'){
                        xaxacox11[x][y]='#';
                       miavor1++;
                       system("cls");

    y++;
    if(xaxacox2[x][y]=='#'){
        n1++;
for(int i=1;i<3;i++){
    y++;
    if(xaxacox2[x][y]=='#'){
        n1++;
    }
    else{break;}
}
    }
    y--;
    x++;
        if(xaxacox2[x][y]=='#'){
       n1++;
for(int i=1;i<3;i++){
    x++;
    if(xaxacox2[x][y]=='#'){
        n1++;
    }
    else{break;}
}}
    y--;
    x--;
        if(xaxacox2[x][y]=='#'){
       n1++;
for(int i=1;i<3;i++){
    y--;
    if(xaxacox2[x][y]=='#'){
        n1++;
    }
    else{break;}
}
    }
    y++;
    x--;
        if(xaxacox2[x][y]=='#'){
       n1++;
for(int i=1;i<3;i++){
    x--;
    if(xaxacox2[x][y]=='#'){
        n1++;
    }
    else{break;}
}
    }
        }
    else if (xaxacox2[x][y]=='.'){
        xaxacox11[x][y]='*';

    }

   std::cout<<" 0,1,2,3,4,5,6,7,8,09"<<std::endl;
        for(int i=0;i<10;i++){
          std::cout<<i;
            for(int j=0;j<10;j++){
            std::cout<<xaxacox1[i][j]<<" ";
        }
            std::cout<<"|";
            for(int h=0;h<10;h++){
                std::cout<<xaxacox11[i][h]<<" ";
            }

             std::cout<<"\n";
        }
     std::cout<<"\nduq krakel eq "<<n1<<"-hatanoc navaki";
        Sleep(2000);
          if(miavor1==15){
        std::cout<<"haxtec 1 xaxacoxY";
        return 0;
    }
    //1 xaxacox
                    //2 xaxacox
                    int n2=0;
                    system("cls");
                           std::cout<<"krakum e 2 xaxacox@"<<std::endl;
        std::cout<<" 0,1,2,3,4,5,6,7,8,9"<<std::endl;
        for(int i=0;i<10;i++){
            std::cout<<i;
            for(int j=0;j<10;j++){
            std::cout<<xaxacox2[i][j]<<" ";
        }
            std::cout<<"|";
            for(int h=0;h<10;h++){
                std::cout<<xaxacox22[i][h]<<" ";
            }
            std::cout<<"|";
            for(int h=0;h<10;h++){
                std::cout<<xaxacox11[i][h]<<" ";
            }
             std::cout<<"\n";
        }
                    std::cout<<"mutqagreq x-";
                    std::cin>>x;
                    std::cout<<"mutqagreq y-";
                    std::cin>>y;
                                      if(xaxacox1[x][y]=='#'){
                        xaxacox22[x][y]='#';
                       miavor2++;
                           system("cls");

    y++;
    if(xaxacox1[x][y]=='#'){
        n2++;
for(int i=1;i<3;i++){
    y++;
    if(xaxacox1[x][y]=='#'){
        n2++;
    }
    else{break;}
}
    }
    y--;
    x++;
        if(xaxacox1[x][y]=='#'){
       n2++;
for(int i=1;i<3;i++){
    x++;
    if(xaxacox1[x][y]=='#'){
        n2++;
    }
    else{break;}
}}
    y--;
    x--;
        if(xaxacox1[x][y]=='#'){
       n2++;
for(int i=1;i<3;i++){
    y--;
    if(xaxacox1[x][y]=='#'){
        n2++;
    }
    else{break;}
}
    }
    y++;
    x--;
        if(xaxacox1[x][y]=='#'){
       n2++;
for(int i=1;i<3;i++){
    x--;
    if(xaxacox1[x][y]=='#'){
        n2++;
    }
    else{break;}
}
    }
        }
    else if (xaxacox1[x][y]=='.'){
        xaxacox22[x][y]='*';

   }




        Sleep(2000);//hhhhhhhh
   std::cout<<" 0,1,2,3,4,5,6,7,8,9"<<std::endl;
        for(int i=0;i<10;i++){
            std::cout<<i;
            for(int j=0;j<10;j++){
            std::cout<<xaxacox2[i][j]<<" ";
        }
            std::cout<<"|";
            for(int h=0;h<10;h++){
                std::cout<<xaxacox22[i][h]<<" ";
            }

             std::cout<<"\n";
        }
        std::cout<<"\nduq krakel eq "<<n2<<"-hatanoc navaki";

                    //2xaxacox


    Sleep(2000);}
    if(miavor2==15){
        std::cout<<"haxtec 2 xaxacoxY";
        return 0;
    }
        //xaxal
        }
        //stexic sksuma 1 hoqanoc xaxalu hamar kod
        if(yyyy==2){
            //mardu dasht
                 char mard[10][10]={
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'}

       };
       //mardu hamar
       //roboti hamar
            char robot0[10][10]={
           {'#','.','.','.','.','.','.','.','.','#'},
           {'.','.','.','.','.','.','.','.','.','#'},
           {'.','.','.','#','.','.','.','.','.','.'},
           {'.','.','.','#','.','.','.','.','.','.'},
           {'.','.','.','#','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','#','.'},
           {'#','#','#','#','#','.','.','.','#','.'},
           {'.','.','.','.','.','.','.','.','#','.'},
           {'.','.','.','.','.','.','.','.','#','.'}
       };
               char robot1[10][10]={
           {'.','.','.','.','.','#','.','.','.','#'},
           {'.','.','.','.','.','.','.','.','.','#'},
           {'#','.','.','.','.','.','.','.','.','#'},
           {'#','.','.','.','.','.','.','.','.','#'},
           {'#','.','.','.','.','#','#','.','.','#'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','#','#','#','#'}
       };
             char robot2[10][10]={
           {'.','.','.','.','.','#','#','#','#','#'},
           {'#','.','.','.','.','.','.','.','.','.'},
           {'#','.','.','.','.','.','.','.','.','.'},
           {'#','.','#','.','.','.','.','.','.','.'},
           {'.','.','#','.','.','.','.','.','.','.'},
           {'.','.','#','.','.','.','#','.','.','.'},
           {'.','.','#','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','#','#'}
       };
             char robot3[10][10]={
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','#','.','.','.','#','.','.','.','.'},
           {'.','.','.','.','.','#','.','.','.','.'},
           {'.','.','.','.','.','#','.','.','.','.'},
           {'.','.','.','.','.','#','.','.','.','.'},
           {'.','.','.','.','.','#','.','.','.','.'},
           {'#','#','#','.','.','.','.','#','.','.'},
           {'.','.','.','.','.','.','.','#','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','#','#','#','#','.','.','.','.'}
       };
         char robot4[10][10]={
           {'.','.','.','.','.','.','.','.','.','#'},
           {'.','#','.','.','.','.','.','.','.','#'},
           {'.','#','.','.','.','.','.','.','.','#'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','#','#','#','#','.','.'},
           {'.','#','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'},
           {'.','.','.','#','#','#','#','#','.','.'},
           {'.','.','.','.','.','.','.','.','.','.'}
       };
       //****************************************************************
       srand(time(NULL));
  int random=rand()%5;
      srand(time(NULL));
  std::cout<<random<<"\n";
//************************************************************************* *
  char robot[10][10];
  if (random=0){
for (int i=0;i<10;i++){
    for (int j=0;j<10;j++){
        robot[i][j]=robot0[i][j];
    }
}
  }
   else if (random=1){
for (int i=0;i<10;i++){
    for (int j=0;j<10;j++){
        robot[i][j]=robot1[i][j];
    }
}
  }
     else if (random=2){
for (int i=0;i<10;i++){
    for (int j=0;j<10;j++){
        robot[i][j]=robot2[i][j];
    }
}
  }
     else if (random=3){
for (int i=0;i<10;i++){
    for (int j=0;j<10;j++){
        robot[i][j]=robot3[i][j];
    }
}
  }
     else if (random=4){
for (int i=0;i<10;i++){
    for (int j=0;j<10;j++){
        robot[i][j]=robot4[i][j];
    }
}
  }
   int n=1;
    for (int i=0;i<5;i++){
        int x=-1;
        int y=-1;
        std::cout<<" 0 1 2 3 4 5 6 7 8 9\n";
        int dirq=0;

        for(int i=0;i<10;i++){
            std::cout<<i;
            for(int j=0;j<10;j++){
                std::cout<<mard[i][j]<<" ";
            }
      std::cout<<"\n";
        }
              std::cout<<"vortex eq cankanum texadrel dzer "<<n<<"-hatanoc navaky\n";
            std::cout<<"mutqagrel x-";
            std::cin>>x;
            std::cout<<"mutqagrel y-";
            std::cin>>y;
            std::cout<<"\n";
             int uxutyun;
            if (n!=1){
            std::cout<<"nshel inch dirqov eq cankanum lini nav@\n";
            std::cout<<"uxadziq-1";
            std::cout<<"horizonakan-2";
            std::cin>>uxutyun;}
            mard[x][y]='#';
            //ste pti nenc anes vor ete xosqi x-@ 5 > lini depi verev tpi u nuyn dzev hakaraky
       if(uxutyun==1  && n!=1 && x<5){
        for(int j=1;j<n;j++){
            x++;
            mard[x][y]='#';
        }
       }
        if(uxutyun==2 && n!=1 && y>5){
        for(int j=1;j<n;j++){
            y--;
            mard[x][y]='#';
        }

       }
         if(uxutyun==2 && n!=1 && y<5){
        for(int j=1;j<n;j++){
            y++;
            mard[x][y]='#';
        }
       }
                if(uxutyun==1 && n!=1 && x>5){
        for(int j=1;j<n;j++){
            x--;
            mard[x][y]='#';
        }
       }
       n++;
        system("cls");
       }

       //roboti hamar

 std::cout<<random<<"\n";
for (int i=0;i<10;i++){
    for (int j=0;j<10;j++){
        std::cout<<robot[i][j]<<" ";
    }
    std::cout<<"\n";
}
        }

  return 0;

}

}