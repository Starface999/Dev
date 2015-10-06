var myFirstJSON =
    {"language basics":
        [{"Spanish":
            {
                                    "letters":["a", "b", "c","ch","d","e","f","g","h","i","j","k","l","ll","m","n","&ntilde;","o","p",
                                    "q","r","rr","s","t","u","v","w","x","y","z"],
                                    "numbers":["uno","dos","tres","quatro","cinco","seis","siete","ocho","nueve","diez",
                                    "once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho",
                                    "diecinueve","veinte"]
            }
                      },
        {"Japanese":
            {
                                    "letters":["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so",
                                    "ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma",
                                    "mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","n"],
                                    "numbers": ["ichi","ni","san","shi","go","roku","shichi","hachi","kyuu","jyuu",
                                    "jyuui chi","jyuu ni","jyuu san","jyuu yon","jyuu go","jyuu roku","jyuu nana",
                                    "jyuu hachi","jyuu kyuu","ni jyuu"]
            }
        }]
    };

for (var key in myFirstJSON) {
    var n = myFirstJSON[key] [1]['Japanese'] /* ['numbers'][1]*/;
    console.log(n);
}