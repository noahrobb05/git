const timer = ms => new Promise(res => setTimeout(res, ms))
function Done() {
    var div = document.getElementById('navbar').style
    if (parseInt(div.width) <= 60) {
        console.log(document.getElementById('navbar3').classList)
        document.getElementById('navbar3').classList.remove('nav2');
        document.getElementById('navbar3').classList.add('nav3');
        document.getElementById('btn1').style.display = 'inline-block';
        document.getElementById('btn2').style.display = 'inline-block';
        document.getElementById('btn3').style.display = 'inline-block';
        async function load () {
            for (i = 0; i <= parseInt(div.width);) {
                i += 30
                await timer(0);
                div.width = i+'px';

                if (i >=300) {
                    console.log(i);
                    break;
                }
            }
        }
        load();
    } else {
        async function load () {
            document.getElementById('navbar3').classList.remove('nav3');
            document.getElementById('navbar3').classList.add('nav2');
            document.getElementById('btn1').style.display = 'none';
            document.getElementById('btn2').style.display = 'none';
            document.getElementById('btn3').style.display = 'none';
            for (i = 300; i >= parseInt(div.width);) {
                i -= 30
                await timer(0);
                div.width = i+'px';
    
                if (i <= 0) {
                    break;
                }
            }
        }
        load();
    }
}