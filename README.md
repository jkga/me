# resume-generator
resume generator for developers   

[![JavaScript Style Guide](https://img.shields.io/badge/Code%20Style-Standard%20-green?style=for-the-badge&logo=javascript)](https://github.com/standard/standard) 
[![JavaScript Style Guide](https://img.shields.io/badge/jsonresume%20-yellow?style=for-the-badge&logo=json)](http://jsonresume.org) 
[![JavaScript Style Guide](https://img.shields.io/badge/POWERED-ZEIT%20-black?style=for-the-badge&logo=zeit)](https://zeit.co/)   

This project leverages the use of [jsonresume schema](https://jsonresume.org/schema) for creating a web based resume with a ready made template. You don't even have to worry with a complex setup and deployment process.

## Why resume-generator?
- Easy to use
- No complex setup
- Sharable link
- Standard resume format
- Ready made templates *(No other available template as of now)*
- Only needs very little coding experience
- **FREE!!!!!!**

## How to make resume
Creating a resume requires you to have a **github account**. This where you store your personal information like full name, work experience, etc... For all supported fields, please check [jsonresume's](https://jsonresume.org/schema/) official website

### Quick Setup
1. Fork :fork_and_knife:this [boiler plate](https://github.com/jkga/about.me) to your account
2. Update `index.json` with your personal information
3. Go to [https://resume-generator-ten.now.sh/[ :man:your_github_username_here]](https://resume-generator-ten.now.sh)  


### Manual Setup
1. Create new :unlock: public repository `about.me`
2. Add `index.json` and paste the sample scheme from [jsonresume website](https://jsonresume.org/schema/) and update the content as necessary
3. Commit the file
4. Go to [https://resume-generator-ten.now.sh/[ :man:your_github_username_here]](https://resume-generator-ten.now.sh)


### JSON Formatter/Checker
:bulb: Before commiting the file please make sure to have a valid `JSON` file to avoid a `profile_not_found error`. You can use the online tools below for checking 

- [https://jsonlint.com](https://jsonlint.com)
- [https://jsonformatter.org](https://jsonformatter.org)
- [https://codebeautify.org/jsonvalidator](https://codebeautify.org/jsonvalidator)


## Language Support
By default, we use the `about-me/index.json` as the main source but out of the box you can also serve your resume with different languages you prefer. All you have to do is commit another file with this recomended filename format `index-[ISO alpha-2].json`      


:bulb: You can add any extension you wish but we `highly recommend` to stick with the recomended `ISO apha-2` extension




> ex. index-ph.json

### Accessing via web
> https://resume-generator-ten.now.sh/[your-github-username]?lang=[ISO alpha-2]


### Country Codes (ISO apha-2)
[https://www.iban.com/country-codes](https://www.iban.com/country-codes)


## Templates
There is no other available template other than the default one but the developer is working hardly to serve it to you soon. Your **PR** is much appreciated

- [Default Template Preview](https://resume-generator-ten.now.sh/preview/templates/default) 

## Donations
This project is free to use and we are not getting commission or generating an income from this in any way. If you love this project your donation is very much welcome. You can buy some drinks :beer: :coffee: for the developer!   

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F2F71KUIX)
