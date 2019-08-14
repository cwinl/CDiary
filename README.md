My first app build by RN used for React-native learning propose

Usage:
0. 
git clone https://github.com/cwinl/CDiary.git
cd  CDiary
npm   i


1. check files for android:  
  keytool -genkey -v -keystore ~/Desktop/CDiary/android/app/debug.keystore -alias CD_alias -keyalg RSA -keysize 2048 -validity 25  
  alter file 'android/app/build.gradle' for segment 'signingConfigs' with the right params.


2. check files for ios:  
  cd ios  &&  pod install
