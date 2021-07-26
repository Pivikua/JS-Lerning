function checkSpam(str) {
    return str.toLocaleLowerCase().includes('viagra'.toLocaleLowerCase())
        || str.toLocaleLowerCase().includes('XXX'.toLocaleLowerCase());
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));