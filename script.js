function Acre() { window.location.href= "https://sefazonline.ac.gov.br/sefazonline/app.wmsintegralista"}
    function Alagoas() { window.location.href="https://www.sefaz.al.gov.br/asp/sintegra/sintegra.asp?estado=AL " }
    function Amazonas() { window.location.href="https://online.sefaz.am.gov.br/sintegra/index.asp" }
    function Amapa() { window.location.href="https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=CAD_011" }
    function Bahia() { window.location.href="https://portal.sefaz.ba.gov.br/scripts/cadastro/cadastroBa/consultaBa.asp" }
    function Ceara() { window.location.href="https://consultapublica.sefaz.ce.gov.br/sintegra/consultar?tipdocumento=2&numcnpjcgf=42061413000126" }
    function Brasilia() { window.location.href="https://ww1.receita.fazenda.df.gov.br/icms/sintegra-consulta" }
    function Espirito() { window.location.href="https://sintegrapi.com.br/consultas-uteis/consultar-sintegra-es" }
    function Goias() { window.location.href="https://appasp.sefaz.go.gov.br/Sintegra/Consulta/default.html" }
    function Maranhao() { window.location.href="https://sistemas1.sefaz.ma.gov.br/sintegra/jsp/consultaSintegra/consultaSintegraFiltro.jsf" }
    function Minas() { window.location.href="https://sintegrapi.com.br/consultas-uteis/consultar-sintegra-mg" }
    function MatoSul() { window.location.href="https://servicos.efazenda.ms.gov.br/consultapublica/Home/Index" }
    function MatoGrosso() { window.location.href="https://www.sefaz.mt.gov.br/cadastro/emissaocartao/emissaocartaocontribuinteacessodireto" }
    function Para() { window.location.href="https://app.sefa.pa.gov.br/sintegra" }
    function Paraiba() { window.location.href="https://www4.sefaz.pb.gov.br/sintegra/SINf_ConsultaSintegra.jsp" }
    function Pernambuco() { window.location.href="https://efisco.sefaz.pe.gov.br/sfi_trb_gcc/PRConsultarExtratoCadastroContribuinteResumido" }
    function Piaui() { window.location.href="https://portal.sefaz.pi.gov.br/sintegra-aviso/i/sintegra-aviso" }
    function Parana() { window.location.href="http://www.sintegra.fazenda.pr.gov.br/sintegra/" }
    function Rio() { window.location.href="https://sucief-sincad-web.fazenda.rj.gov.br/sincad-web/index.jsf" }
    function RioNorte() { window.location.href="https://sintegrapi.com.br/consultas-uteis/consultar-sintegra-rn" }
    function Rondonia() { window.location.href="https://portalcontribuinte.sefin.ro.gov.br/Publico/parametropublica.jsp" }
    function Roraima() { window.location.href="https://portalweb.sefaz.rr.gov.br/sintegra/servlet/wp_siate_consultasintegra" }
    function RioSul() { window.location.href="https://www.sefaz.rs.gov.br/consultas/contribuinte" }
    function SantaCat() { window.location.href="https://sat.sef.sc.gov.br/tax.NET/Sat.Cadastro.Web/ComprovanteIE/Consulta.aspx" }
    function Sergipe() { window.location.href="https://portal.apps.sefaz.se.gov.br/auth/realms/fazendario/protocol/openid-connect/auth?client_id=portal-frontend&redirect_uri=https%3A%2F%2Fportais-fazendario.apps.sefaz.se.gov.br%2Fprivate%2Fportal-fazendario%2Fvinculos&state=4bebab16-52c2-4d87-8b2b-20194ae23327&response_mode=fragment&response_type=code&scope=openid&nonce=23cda0e7-2d1b-4d0a-b10e-58f88843a19f&code_challenge=m9u_-v727iYj5eA1LfhuiTOr4PQH7K4JHSt9mpJToUM&code_challenge_method=S256" }
    function SaoPaulo() { window.location.href="https://www.cadesp.fazenda.sp.gov.br/(S(53k5ryblv4jjsor2shwuottc))/Pages/Cadastro/Consultas/ConsultaPublica/ConsultaPublica.aspx"}
    function Tocantins() { window.location.href="https://sintegra.sefaz.to.gov.br/sintegra/servlet/wpsico01" }

//usar com tab e enter para passar
    document.querySelectorAll('#estados path[role="link"]').forEach(function (p) {
      p.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          p.dispatchEvent(new MouseEvent('click'));
        }
      });
    });