        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var _intervalId01 = 0;
        var _intervalId02 = 0;
        var _intervalId03 = 0;
        var _intervalId04 = 0;

        function countup(countId,x) {

            document.getElementById(countId).innerHTML = x;
                x++;
        }

        _intervalId01 = setInterval(countup,1500,"pp-count01",a);
        _intervalId02 = setInterval(countup,300,"pp-count02",b);
        _intervalId03 = setInterval(countup,1000,"pp-count03",c);
        _intervalId04 = setInterval(countup,1000,"pp-count04",d);