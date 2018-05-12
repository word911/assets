(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('原州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"640402","properties":{"name":"原州区","cp":[106.287781,36.003739],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AA@AA@@AAA@ACA@A@A@C@@@A@AAACA@AAA@@AA@@BA@@BC@EA@@@BAB@BA@@B@@A@@AA@AA@@CBABA@CBA@ABA@@@@B@B@BA@@@AC@AA@A@@@A@A@A@@D@@@BAB@@AB@@@@AAA@@@AFA@A@@A@@AB@B@@CBABABA@@BABA@A@AB@@A@@@@@A@@@C@@BCBA@@BCA@@CCACBA@@DA@C@A@@A@CA@@ACACA@A@ABA@ABE@@B@BBDDF@DBBA@@BABA@A@ABA@AB@@ABAAED@@@B@BA@@B@@A@AAA@C@ABA@@@GC@C@AAA@@A@@@ABCD@@ABC@CBCBEBCBMBC@AB@@ABCB@@@B@B@BDBBBB@@B@@ABA@@B@BB@BD@@@B@B@@BBD@B@@@BDA@@B@DA@AB@DAD@@BB@@B@B@@BDD@@B@DB@@@@@B@@@B@B@B@BBBBB@B@BAB@BDBDBDABCBBABB@@BDBBD@BBFBB@@B@@@@@B@@@FBB@@BDDB@B@@B@@ABAB@B@@ABEBA@@@@DEF@BBDB@DABB@@BBBB@@BA@@B@@B@B@BBBDBB@B@@@@DB@@@@@B@D@B@D@B@LDB@B@BBH@HB@@B@@BDBHBBBBBBBBFBF@B@B@@A@ABA@@BAD@D@BBDBD@DADAB@@@BB@DBB@@@@B@@@B@DABADAFAFADGH@B@D@@@BCBAD@DAD@@AB@@A@@@A@A@CACBEBABCFAF@@@F@@@D@@EJABADADAB@@ABA@C@@@CB@BA@ABA@A@C@A@@B@BAHBB@BBBADBBBHBJ@BBB@DA@@DAB@B@DB@BBBBB@BBD@HFLH@@@@@DAR@D@BABABCB@B@@@@BB@BBF@@@@HDB@B@BBB@HL@DAD@BABAD@@ABA@CDABABA@A@@@AB@BAH@BHF@B@@B@AB@D@DAB@@@B@B@BBB@@@BB@@@BBHH@@@B@@ABAD@B@B@D@D@@BLBB@B@@@B@BDH@@@B@B@@B@BB@@BB@D@B@@@D@@@BCHABA@@B@@@J@B@H@D@B@@AB@BCHGF@BA@@@@@ABQZCF@B@@@BBB@@@B@BABEHCDAB@@BB@@BBBD@@@B@BCJAF@@@B@@BB@@@B@@@B@BGVAD@F@B@@C@C@AB@B@B@H@J@BAD@BCHAB@B@@CH@B@@AB@@@@@BAD@@@@ENABAB@DAD@@EB@@@J@BAB@DABA@@B@B@@@B@B@@AB@@@B@@@BBD@D@@CFIZAB@@@BA@ABC@@@ABABADAD@DAD@BBB@B@B@@BBDFBB@@B@B@BB@@@@@DDDJN@@B@BABADABAB@D@B@@@FABAD@PP@@@@@BB@B@HBBAFBBB@@BDFN@@BBB@BBB@@@BBBAD@BABBDAF@D@DADB@ADBD@HFHFB@F@HENCFCHCDB@@BDAFBFF@D@DDDA@@DBBABBBCBCDC@CB@DEDEDGDCFBDBXJP@NCVHDB@B@@DDDDFBHBNBLBB@DBD@BBB@B@BAB@BAD@DBnI@FBDJJBL_H@@BB@DDFHFHDJHDDFBFDDDLFLDDDHFFDD@BBB@FAFCF@JAFBF@B@B@BDBFAF@BDDBBBD@DDH@NDHBDFCHCLB@BDDL@HCN@BCDADD@D@DAZBJALHLHDFNBH@@@BA@@@A@CEEEC@C@EBABBLDLALCJEBAFAD@DF@HBNDFFFBFCDBBHDFBLB@HCLAHFDFBNBBFAJALF@D@D@BF@RC@APETMFBFBN@DCD@@D@NAFAD@@B@B@BAB@DABABAB@BAD@DBD@DBBBDBB@BABA@@BCDCHGLIDCDCDCDAD@BBDBBBB@B@@@@CBADA@@B@BB@@@@BB@AB@@@B@@@B@B@B@BADABA@A@C@A@A@ABCDABABCBA@@B@B@B@B@@BB@@BB@B@@@B@@@A@@B@B@@@@ABBHDH@@@@BBB@@@BCB@@AJIBCD@D@DADAFAF@DAFCBC@@AAAC@CBCDC@A@@@AACAA@A@C@CAA@@@@@A@@ACCCAAEAEACCCCAAAA@AA@@A@A@A@@AAACAE@A@@@@BA@@B@B@B@@@B@FEDC@C@C@CCACAAE@CA@@@ABABA@A@A@@@@BABBF@BA@@BAAA@A@ABA@A@@AAA@EBE@E@AAA@E@CACC@AA@A@@BABA@@B@DAB@BBD@FBB@B@@@BB@@B@B@DADAHKDEB@DDBDDABAFAD@BCAAACACBEFABADADEAC@ACAE@C@ABEDEBC@EBEBCBCCBCACBM@KAc@A@CBAAE@K@CCC@@@CA@@@AA@@@@A@@A@B@@@@A@@@@@@A@@@@@@@@A@@@@@BC@AB@BG@A@A@@@@A@A@@BA@@@@@@AA@@@@@AB@A@@@@@@@@@AB@DCBA@ABA@@B@@@B@@A@@@@DAHE@CBGAC@CBCBE@CCAADCFCDABA@C@ABADAH@BADEDAB@@@BADCBABA@AB@BA@@B@B@BA@@@@@AA@A@@A@@BA@A@A@@B@@A@@@@A@@@@A@A@@@A@AAC@@@C@AAAA@ABA@C@A@A@@BA@@@@BA@@BA@@@@@@@@B@@A@A@@@@BA@@DCBCBA@ABABA@A@AB@BC@A@A@A@@BA@ADA@@BAB@B@B@B@@ABA@ADCB@@@BAB@B@@A@@BA@ABA@@@A@@B@@@@@B@@@BABC@A@@@A@@@@@@B@@@@@@A@CAABABADCFADAB@@AAA@AAECA@ACE@A@@A@AAAA@AAA@A@AA@AA@A@@@@ACACAACIACAEACACAAACAAAAGIAAAAEIAA@A@AAA@A@AAC@A@A@GEO@CDEBK@M@AAC@ABEBC@ABC@A@CAEBCAABA@@@AB@@A@AAC@CAA@A@A@AAABABCBA@AA@@A@GAG@AAAAC@AA@CC@@@CBE@A@@AAA@A@@A@C@AAA@GAAC@EAEBCB@AAA@ACG@CBEHEDAD@D@BCBCBCFCFEDGFGDEBA@ADKBIFIDGBIBIDA@ABABABCB@B@@DBFBB@@F@JCRKHKHMHEBCFEFCDEBCFCBGBG@@@C@A@A@C@@CCA@@AA@CECIDCBA@AA@A@CCCAEGACCCC@A@@@C@ADABC@CAEAEAGAC@CDAACCAGCGCI@C@@A@@B@@EFABGFABEHGFC@CDCB@@A@EAC@ABCDCBCBCBCBCACA@@CE@G@CCAEAA@ABE@CACAEACAACAAC@@@@D@BA@EEC@C@C@A@@AACAA@AAA@A@@CAAACBAAAC@C@@BABCDCBC@AA@ABCBA@AAAAA@GDI@E@E@CAA@@CCAE@C@GBEDEBE@E@C@C@ABCB@@CAABGDADGBGBIFA@C@E@C@CA@@@@AE@AAABC@AAAAC@CEI@CAAAAAC@ABEBELUB@@GBCB@DADADADCBAD@DEFC@A@CBA@ADEBAAACCEAA@AFCFCBC@EAECAAEEAAA@C@CBCDEBEFEDEDEFCBCBA@@AAA@CAGA@AAC@CA@A@@FEBA@C@AAAAABABC@AA@C@CBCBC@A@AAAA@E@C@@AAA@EBA@@C@AECCEAEAEAAE@ECAA@CB@DA@@BC@ACACA@ABABAB@D@DABCDAB@HCBAD@DAB@DABBLHDBDDDBJFBBB@B@@EBA@CB@@@BD@@B@BAEK@MBCBCDCDCBCBC@AJIBA@CGGACAC@AA@EBIFOPGFAFCDC@AADAAECAAAMEECCCECCABCBCDAACCACACEAECCCCE@CB@@CDADAF@BGBCBDD@DCHABABCBA@AAIAEACCCACAA@SGC@IFG@GACAE@ACAEEECAC@C@ADCFABAD@DA@A@CA@@A@@@A@ABCAC@A@A@AD@@ABAA@A@CA@@@C@A@@A@A@AAAA@C@A@C@A@E@A@A@AAC@ABA@AAA@A@@@C@E@@@A@AAA@A@A@A@@BCB@BA@CBA@C@C@A@AAAAA@AB@@ADAB@@ABA@@@A@"],"encodeOffsets":[[108661,36629]]}}],"UTF8Encoding":true});}));