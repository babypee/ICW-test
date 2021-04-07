        var a = 0;
        var b = 0;
        var _intervalId = 0;

        function countup() {
            // if (a < 10) {
            //     document.getElementById("pp-count01").innerHTML = a;
            //     a++;
            // } else {
            //     // a=0;
            //     // clearInterval(_intervalId);
            // }
            document.getElementById("pp-count01").innerHTML = a;
                a++;

        }

        _intervalId = setInterval(countup,500);