#include <iostream>
using namespace std ;

int main() {
   
  void reversedNum (int n){
         int res ;
         int num = 0 ;

         while(n>=1){
            res= n%10 ;
            num =(num*10)+res ;
            n=n/10 ;
         }
         cout<< num << endl ;
  }

    reveresdNum(121) ;
}