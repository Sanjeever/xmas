//Playback starts as soon as Howl is generated
const sound = new Howl({
    //use Cloud Object Storage
    src: ["https://files-1251985639.cos.ap-shanghai.myqcloud.com/Rook1e%2CJ'san%20-%20Have%20Yourself%20a%20Merry%20Little%20Christmas%20(feat.%20j'san).mp3"],
    html5: true,
    autoplay: true,
    loop: true,
    onplayerror: () => {
        sound.once('unlock', () => {
            sound.play();
        });
    }
});

window.onload = function () {
    function IsPC() {
        //IsPC.js https://gist.github.com/joshle/d079f1766fa1cd2adc778d3afd63ac61
        const userAgentInfo = navigator.userAgent;
        const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    const MainTree = document.querySelector('#ChristmasTree');
    const switcher = document.querySelector('#switcher');

    if (!IsPC()) {
        document.querySelector('.switch').innerHTML = '';
        document.querySelector('.switch').remove();
        MainTree.innerHTML = '&#127876;';
        document.getElementById('ChristmasTree').style.fontSize = '20vh';
        document.getElementById('previous_btn').style.position = 'absolute';
        document.getElementById('previous_btn').style.left = '42%';
        window.onblur = function () {
            sound.stop();
        }
    }

    switcher.addEventListener('click', function () {
        if (this.checked) {
            MainTree.innerHTML = '&#127876;';
            document.getElementById('ChristmasTree').style.fontSize = '28vh';
        } else {
            MainTree.innerHTML = '<img src="resources/1f384.svg" alt="🎄">';
            document.getElementById('ChristmasTree').style.fontSize = '13vh';
        }
    });

    document.querySelector('#previous_btn').addEventListener('click', function () {
        window.location.href = "index.html";
    });
}

window.onclose = function () {
    sound.stop();
}
