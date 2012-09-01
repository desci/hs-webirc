/*
	Copyleft 2012

	Este arquivo é parte de hs-webirc.

	hs-webirc é um software livre; você pode redistribui-lo e/ou
	modifica-lo dentro dos termos da Licença Pública Geral GNU como
	publicada pela Fundação do Software Livre (FSF); na versão 3 da
	Licença.

	Este programa é distribuido na esperança que possa ser útil,
	mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUAÇÂO
	a qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
	Licença Pública Geral GNU para maiores detalhes.

	Você deve ter recebido uma cópia da Licença Pública Geral GNU
	junto com este programa, se não, escreva para a Fundação do
	Software Livre(FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA
	02110-1301 USA.
*/
// Função para testar se o navegador é Microsoft Internet Explorer com uma versão menor que 8.
function testaMSIE8(navigator) {
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
		var versao = new Number(RegExp.$1);
		if (versao >= 8) {
			return '<p>Se o webchat não funcionar corretamente, tente atualizar o navegador para a versão mais nova ou use outro navegador como por exemplo Opera, Mozilla Firefox, Google Chrome. A versão do teu Internet Explorer é ' + versao + ' e esta versão não funciona bem com iframes.</p>';
		} else {
			return '';
		}
	} else {
		return '';
	}
}
// Função para redimensionar o webchat de acordo com o tamanho da janela (não funciona no MSIE5).
function redimensionaWebchat(window,document) {
	if (typeof window.innerWidth != 'undefined' && typeof window.innerHeight != 'undefined') {
		document.getElementById('webchat').setAttribute('width',(parseInt(window.innerWidth)-32));
		document.getElementById('webchat').setAttribute('height',(parseInt(window.innerHeight)-500));
	} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientWidth != 0 && document.documentElement.clientHeight != 0) {
		document.getElementById('webchat').setAttribute('width',(parseInt(document.documentElement.clientWidth)-32));
		document.getElementById('webchat').setAttribute('height',(parseInt(document.documentElement.clientHeight)-500));
	} else {
		document.getElementById('webchat').setAttribute('width',(parseInt(document.getElementsByTagName('body')[0].clientWidth)-32)); document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementsByTagName('body')[0].clientHeight)-500));
	}
}
// Função para redimensionar a altura do webchat de acordo com a altura da janela (não funciona no MSIE5).
function redimensionaWebchatAlturaJanela(window,document) {
	if (typeof window.innerHeight != 'undefined') {
		document.getElementById('webchat').setAttribute('height',(parseInt(window.innerHeight)-80));
	} else if (typeof document.documentElement != 'undefined'  && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientHeight != 0) {
		document.getElementById('webchat').setAttribute('height',(parseInt(document.documentElement.clientHeight)-80));
	} else {
		document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementsByTagName('body')[0].clientHeight)-80));
	}
}
// Funções para redimensionar a altura do webchat de forma absoluta (não é necessário testar elementos próprios do navegador neste caso - porém isso parece não funcionar no MSIE5).
function redimensionaWebchatMenosUm(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))-1));
}
function redimensionaWebchatMaisUm(document) {
	document.getElementById('webchat').setAttribute('height', (parseInt(document.getElementById('webchat').getAttribute('height'))+1));
}
function redimensionaWebchatMenosDez(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))-10));
}
function redimensionaWebchatMaisDez(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))+10));
}
function redimensionaWebchatMenosCem(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))-100));
}
function redimensionaWebchatMaisCem(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))+100));
}
function redimensionaWebchatMenosMil(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))-1000));
}
function redimensionaWebchatMaisMil(document) {
	document.getElementById('webchat').setAttribute('height',(parseInt(document.getElementById('webchat').getAttribute('height'))+1000));
}
