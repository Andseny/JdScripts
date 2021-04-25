const USER_AGENTS = [

  "jdapp;android;9.4.4;10;network/wifi;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.4.4;9;D266436653462-6665326466626;network/4g;model/Mi Note 3;addressid/137888479;aid/15225879b8538ee7;oaid/f3157082db9da676;osVer/28;appBuild/86388;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
  "jdapp;android;9.4.4;10;5353235373364666-4693734373436656;network/wifi;model/GM1910;addressid/993893557;aid/55257cdfd97474fe;oaid/;osVer/29;appBuild/86388;partner/oppo;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.4.4;9;8363538313830343131373538363-93D2134313639356631333737346;network/wifi;model/16T;addressid/1312262776;aid/afba6ae53ef2cece;oaid/;osVer/28;appBuild/86560;partner/meizu;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;13.6;4be30ed80cc93279b20b3511b0e6f6e2d41d8cd9;network/wifi;ADID/82EBC38A-22C9-7832-2854-ECD760EFDF03;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/7326117e0c;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/4be30ed80cc93279b20b3511b0e6f6e2d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|94238f5e91534eff26963c550a0844a9|1611133787;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.6;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;13.6;c6da5a938942c27b2634d3a6e090a97fd41d8cd9;network/wifi;ADID/5A517546-F045-7A96-18EC-7317E0C421AF;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/be6eafa49d;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/c6da5a938942c27b2634d3a6e090a97fd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|54d27456fc7f2bd400e62be20379cf7f|1611133813;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.6;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;13.5;ee2a7f972ca063afcad4a5f72fcfab08d41d8cd9;network/wifi;ADID/DF67F172-D6E8-5902-2632-3E15BF5750B9;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/6149dbfa94;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/ee2a7f972ca063afcad4a5f72fcfab08d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|a51546972a7bb617fdc68eb06fee5741|1611133838;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;14.1;25b72f51edbd1ffd2a44851e43e701ddd41d8cd9;network/wifi;ADID/AA9A9C35-145C-F479-5E79-B90BE7575387;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/eef38d6f5a;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/25b72f51edbd1ffd2a44851e43e701ddd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|23aadc6f6678b717e3074c2e18216e4b|1611133863;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;13.3;8fa5153535d8162d149576903ef83f60d41d8cd9;network/wifi;ADID/6BD621BD-56D2-8D41-5992-612C9B47AE31;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/6ef0458b3e;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/8fa5153535d8162d149576903ef83f60d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|7c7cccc08e3ad1133fab7a5d55594778|1611133878;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.3;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;13.7;570e3fe0ac1f9ec37594db4150defda8d41d8cd9;network/wifi;ADID/81259E93-4BD6-EEE0-5940-38488EE9CD8C;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/0c7e39ea95;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/570e3fe0ac1f9ec37594db4150defda8d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|6af58e2b8306030829a2c7263dde5fbf|1611133889;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.7;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;14.1;ee5c7a30c9ecf6403d3a51e21256b0a3d41d8cd9;network/wifi;ADID/FD2E3F22-568C-1272-BB67-337E9ADA87A9;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/bd62f241d6;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/ee5c7a30c9ecf6403d3a51e21256b0a3d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|8b7418a46668301083f645ee8cfd1665|1611133902;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;13.3;bab8095131dce3fce92e517b3768f656d41d8cd9;network/wifi;ADID/29357F7E-E207-8125-5230-618217D502FB;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/c6f851e123;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/bab8095131dce3fce92e517b3768f656d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|9049d276d487231ca48418fb1c065568|1611135259;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.3;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;13.4;bccf1a9e60a5387006a7a429c1da737bd41d8cd9;network/wifi;ADID/66286A8A-AC77-621C-0FC3-DD50D883F335;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/0260059994;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/bccf1a9e60a5387006a7a429c1da737bd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|6e5caa6534e7e568e0d805a892e465e3|1611135309;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 13.4;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;14.3;4c1eb8becaa1ac13148d8e1ae757b095f3897035;network/wifi;ADID/0AEFEAA4-D39D-44C9-9C0C-0BE23F8F71AA;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,3;addressid/902369124;supportBestPay/0;appBuild/167515;jdSupportDarkMode/1;pv/545.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/4c1eb8becaa1ac13148d8e1ae757b095f3897035|1273;jdv/0|kong|t_1000089893_157_0_184__0615da2400ad7955|tuiguang|15fa9ecbea21461d924d3dae0e870cf5|1611139506;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.4.4;9;D256434363461-6531383831656;network/wifi;model/MI 6;addressid/856540565;aid/f0ee06ebc7f6e98f;oaid/7fed3628fe652595;osVer/28;appBuild/86533;psn/V0yRdEdRydfYb9nackt2CQ==|3683;psq/0;adk/;ads/;pap/JA2015_311210|9.4.4|ANDROID 9;osv/9;pv/3513.0;jdv/0|kong|t_1000089893_|tuiguang|72e393e7b2474bc6a2369615f1b262e5|1610986845;ref/;partner/jingdong;apprpd/;eufv/1;Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.4.4;11;2353632303533303-4613731326261636;network/wifi;model/Redmi K30 5G;addressid/137593713;aid/25620530d171bbac;oaid/bfa9b0b7eca0475e;osVer/30;appBuild/86560;psn/oAPbHSW3fqrTmO6vGi1h73hJ0XCn9xEB|2846;psq/6;adk/;ads/;pap/JA2015_311210|9.4.4|ANDROID 11;osv/11;pv/2763.63;jdv/0|kong|t_1000089893_157_0_184__6fe1ce2ddf1f49a0|jingfen|249389d15ac843dbbbec52ce919891fb|1610851978;ref/com.jingdong.app.mall.home.JDHomeFragment;partner/xiaomi001;apprpd/Home_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045511 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;11.4;9ed0d69aaf190b5b4277868d2c0470fe1f787080;network/wifi;model/iPhone8,1;appBuild/100401;ADID/64199E21-4ECD-4217-BD79-0C4D82033FD8;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/73;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79",
  "jdapp;android;9.4.4;10;3b78ecc3f490c7ba;network/wifi;model/M2006J10C;addressid/138543439;aid/3b78ecc3f490c7ba;oaid/7d5870c5a1696881;osVer/29;appBuild/85770;psn/3b78ecc3f490c7ba|599;psq/2;uid/3b78ecc3f490c7ba;adk/;ads/;pap/JA2015_311210|9.4.4|ANDROID 10;osv/10;pv/580.2;jdv/0|kong|t_1000089893_|tuiguang|e21138bd89c445d98a2cc2e375c37b4f|1606572739;ref/com.jd.lib.personal.view.fragment.JDPersonalFragment;partner/jingdong;apprpd/MyJD_Main;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.4.4;10;3326738356363633-6643930336732616;network/wifi;model/M2006J10C;addressid/138543439;aid/3b78ecc3f490c7ba;oaid/7d5870c5a1696881;osVer/29;appBuild/86390;psn/+pXCRL9fJyKJUUyy3COtPXYNfar5tX5i|2154;psq/2;adk/;ads/;pap/JA2015_311210|9.4.4|ANDROID 10;osv/10;pv/1473.2;jdv/0|kong|t_1000170135|tuiguang|notset|1607913972208|1607913972;ref/com.jingdong.app.mall.home.JDHomeFragment;partner/jingdong;apprpd/Home_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.4.4;10;f0798926f10dc8d8;network/wifi;model/ONEPLUS A6000;addressid/2082421393;aid/f0798926f10dc8d8;oaid/;osVer/29;appBuild/84555;partner/oppo;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36",
  "jdapp;android;9.4.4;9;864360034117260-18d276c8a45f;network/wifi;model/MHA-AL00;addressid/2013852661;aid/6edf28a51a564bc7;oaid/7efede7f-7ffb-839d-d58f-7f7b7ff9c1ee;osVer/28;appBuild/83789;partner/jingdong;Mozilla/5.0 (Linux; Android 9; MHA-AL00 Build/HUAWEIMHA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.4.4;8.1.0;865664032788249-90f05250a015;network/wifi;model/16 X;addressid/137581227;aid/99e3cd08cf5f0a2c;oaid/;osVer/27;appBuild/71869;partner/meizu;Mozilla/5.0 (Linux; Android 8.1.0; 16 X Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.4.4;8.0.0;3353936343830383030333835333-53D2430343563363237316933336;network/wifi;model/HTC U-3w;addressid/1077019363;aid/c62026bb64774879;oaid/;osVer/26;appBuild/86560;partner/jingdong;eufv/1;Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w Build/OPR6.170623.013; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;14.0.1;f467d6c04cd809e79dc000c574f8f79f00948dbc;network/wifi;ADID/60D6729F-9462-416A-84BA-087DE63342EA;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/138086175;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/1122.25;apprpd/Babel_Native;ref/https%3A%2F%2Fwbbny.m.jd.com%2FbabelDiy%2FZeus%2F2cKMj86srRdhgWcKonfExzK4ZMBy%2Findex.html%3FbabelChannel%3Djx%26lng%3D118.734885%26lat%3D31.980189%26sid%3D5ac4902e0d1350a80f8127f88cc27c3w%26un_area%3D12_904_3379_62183%23%2Fhome;psq/0;ads/;psn/f467d6c04cd809e79dc000c574f8f79f00948dbc|3145;jdv/0|kong|t_1001597287_27078064|jingfen|ba710561492a446da2815e561082c75b|1611304510000|1611367639|1611367690;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.0.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.4.4;10;8363434323030343235333838383-93D2134346136393268356361326;network/wifi;model/LYA-AL00;addressid/514336649;aid/4566072c8d9c08ac;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/86560;partner/huawei;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;14.2;075879f1ae1f0fede61c030eb6b3e7b1b0ce9ae2;network/wifi;ADID/88BBE341-AE7D-4789-B7D9-B5EBBFF413A5;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/138021169;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/980.15;apprpd/MyCalendar_ActivityCalendar;ref/;psq/4;ads/;psn/075879f1ae1f0fede61c030eb6b3e7b1b0ce9ae2|3781;jdv/0|direct|-|none|-|1611189859248|1611189890;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;14.3;f43410af69a81012383ca839707069b2a4c68e27;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/3064531114;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/481.19;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/f43410af69a81012383ca839707069b2a4c68e27|1274;jdv/0|kong|t_1000170136|tuiguang|notset|1611275169877|1611280752;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;14.2;be1acbcd17e4c25aeb5bc17c7567a8fa44ce9cab;network/wifi;ADID/04974BAF-2BED-45AC-A0AE-2242820A3C4F;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone13,4;addressid/1083782522;supportBestPay/0;appBuild/167502;jdSupportDarkMode/0;pv/1548.4;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/be1acbcd17e4c25aeb5bc17c7567a8fa44ce9cab|2101;jdv/0|kong|t_1000170135|tuiguang|notset|1611232250866|1611232250;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.4.4;8.1.0;869071037529592-9487e01e7f2d;network/wifi;model/MI 8;addressid/2769817385;aid/f4ed3e79ab29f481;oaid/;osVer/27;appBuild/85371;partner/xiaomi001;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
  "jdapp;android;9.4.4;10;9356665333362626-4603362346333356;network/UNKNOWN;model/Redmi K20 Pro Premium Edition;addressid/137826363;aid/9ef53cbbd0c2d33e;oaid/ec7c5827275510c6;osVer/29;appBuild/86388;psn/DlHZjadWfe77DEYHrpjFjvKonV0SSFdy|921;psq/2;adk/;ads/;pap/JA2015_311210|9.4.4|ANDROID 10;osv/10;pv/793.2;jdv/0|kong|t_1000089893_|tuiguang|7459d8cb7c8f4f9f8e6e87751f61bd18|1611236364;ref/com.jd.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi001;apprpd/MyJD_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;14.3;244bd50c51f0b198dd8733afe89cdec4b09df713;network/wifi;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,2;addressid/0;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/244bd50c51f0b198dd8733afe89cdec4b09df713|2;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.4.4;14.3;85ce08e05756b547e15f0b637cc99addd96b3345;network/4g;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/138116050;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/524.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/85ce08e05756b547e15f0b637cc99addd96b3345|1591;jdv/0|kong|t_1000170136|tuiguang|notset|1609480641159|1609480641;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.4.4;11;2643139303035683-6326533623539333;network/UNKNOWN;model/Redmi K20 Pro Premium Edition;addressid/0;aid/b41900e86b5c2593;oaid/a1ae016fae05d3c8;osVer/30;appBuild/86560;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36",
  "jdapp;android;9.4.4;10;8363037353830343533303236333-73D2438323361603735616833316;network/UNKNOWN;model/MI 8;addressid/2532472939;aid/b5de2a5d9ce280f6;oaid/867c11ae16e94d11;osVer/29;appBuild/86560;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
  "jdapp;iPhone;9.4.4;14.1;b9d474077232e439a03d610bc11e3861a0296b67;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/13377806;supportBestPay/0;appBuild/167432;pushNoticeIsOpen/0;jdSupportDarkMode/0;pv/259.20;apprpd/Home_Main;ref/JDMainPageViewController;psq/17;ads/;psn/b9d474077232e439a03d610bc11e3861a0296b67|675;jdv/0|kong|t_1000089893_|tuiguang|c37639dcb10b43c0a4ceb54b19be50cf|1610978908;adk/;app_device/IOS;pap/JA2015_311210|9.4.4|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}