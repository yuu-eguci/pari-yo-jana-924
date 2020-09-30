// 全ページ共通の JS です。
// NOTE: 量が少ないため、 util も初期化もいっしょくたにしています。

const openInBlankTab = function (url) {
    window.open(url, '_blank');
};

$(function () {

    // NOTE: もともとのテンプレートでは document.write で描画していますが、 [Violation] Avoid using document.write(). が出るためこちらで描画しています。
    $('#full-year').html(new Date().getFullYear());

    // NOTE: Manually added. スマホサイズのときメニューが開かれたら、同時に中のメニューも開くための処理です。
    const classy_nav = $('.classynav ul');
    const navbarToggler = $('.classy-navbar-toggler');
    const closeIcon = $('.classycloseIcon');
    const ddTrigger = classy_nav.find('li .dd-trigger');
    navbarToggler.on('click', function () {
        ddTrigger.trigger('click');
    });
    closeIcon.on('click', function () {
        if (ddTrigger.parent('li').hasClass('active')) {
            ddTrigger.trigger('click');
        }
    });

});
