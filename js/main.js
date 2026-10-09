/* LUME FILMES — configuração do contato por WhatsApp
 *
 * STATUS: PENDENTE. O número real ainda não foi definido.
 * Para conectar: preencha whatsappNumber com código do país + DDD + número,
 * somente dígitos. Exemplo de formato (não é um número real): "5592900000000".
 */
const CONFIG = {
  whatsappNumber: "", // PENDENTE
  message:
    "Olá! Vi o site da LUME FILMES e gostaria de conversar sobre o meu casamento.\n\nData: \nCidade: "
};

(function () {
  "use strict";
  var digits = CONFIG.whatsappNumber.replace(/\D/g, "");
  var valid = digits.length >= 12 && digits.length <= 13;
  var buttons = document.querySelectorAll('[data-cta="whatsapp"]');
  var pending = document.querySelector("[data-whatsapp-pending]");

  if (valid) {
    var url = "https://wa.me/" + digits + "?text=" + encodeURIComponent(CONFIG.message);
    buttons.forEach(function (el) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    if (pending) pending.hidden = true;
  } else {
    // Sem número: nenhum envio é simulado. Os botões levam ao bloco de contato,
    // e o botão final leva ao aviso de configuração pendente.
    buttons.forEach(function (el) {
      el.setAttribute("data-whatsapp-status", "pendente");
    });
  }
})();
