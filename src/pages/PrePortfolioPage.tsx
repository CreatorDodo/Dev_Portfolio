export default function PrePortfolioPage() {
  return (
    <div className="h-96 bg-zinc-800">
      <div className="Projeto absolute left-[80px] top-[80px] inline-flex h-96 w-96 flex-col items-start justify-end bg-zinc-900">
        <div className="Intro flex flex-col items-center justify-end gap-24 px-40 pb-14 pt-28">
          <div className="Info inline-flex h-96 flex-col items-center justify-start gap-20 self-stretch">
            <div className="Header flex h-80 flex-col items-center justify-start gap-14">
              <div className="Avatar relative h-28 w-28">
                <div className="User absolute left-[8px] top-[8px] h-24 w-24">
                  <div className="Border absolute left-0 top-0 h-24 w-24 rounded-full border-2 border-red-400" />
                  <img
                    className="Image absolute left-[4.36px] top-[4.36px] h-20 w-20 rounded-full"
                    src="https://via.placeholder.com/87x87"
                    alt="User Avatar"
                  />
                </div>
                <div className="Code absolute left-[78px] top-[78px] inline-flex h-8 w-8 items-center justify-center px-px py-1" />
              </div>
              <div className="Text flex h-40 flex-col items-center justify-start gap-5 self-stretch">
                <div className="Title flex h-24 flex-col items-center justify-start gap-2 self-stretch">
                  <div className="HelloWorldMeuNomeMartinaSantosESou self-stretch text-center">
                    <span
                      style={{
                        color: 'neutral-300',
                        fontSize: '1.25rem',
                        fontWeight: 'normal',
                        fontFamily: 'Inconsolata',
                        lineHeight: 'normal',
                      }}
                    >
                      Hello World! Meu nome é{' '}
                    </span>
                    <span
                      style={{
                        color: 'red',
                        fontSize: '1.25rem',
                        fontWeight: 'normal',
                        fontFamily: 'Inconsolata',
                        lineHeight: 'normal',
                      }}
                    >
                      Martina Santos
                    </span>
                    <span
                      style={{
                        color: 'neutral-300',
                        fontSize: '1.25rem',
                        fontWeight: 'normal',
                        fontFamily: 'Inconsolata',
                        lineHeight: 'normal',
                      }}
                    >
                      {' '}
                      e sou
                    </span>
                  </div>
                  <div className="DesenvolvedoraFullstack self-stretch text-center font-['Asap'] text-6xl font-bold leading-10 text-zinc-200">
                    Desenvolvedora Fullstack
                  </div>
                </div>
                <div className="TransformoNecessidadesEmAplicaEsReaisEvolventesEFuncionaisDesenvolvoSistemasAtravSDaMinhaPaixOPelaTecnologiaContribuindoComSoluEsInovadorasEEficazesParaDesafiosComplexos font-['Maven Pro'] self-stretch text-center text-sm font-normal leading-tight text-gray-400">
                  Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da
                  minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
                </div>
              </div>
            </div>
            <div className="Tags inline-flex items-start justify-start gap-4">
              <div className="Tag flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <div className="Github flex h-6 w-6 items-center justify-center px-0.5 py-0.5" />
                <div className="Github font-['Maven Pro'] text-center text-base font-normal leading-snug text-neutral-300">
                  GitHub
                </div>
              </div>
              <div className="Tag flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <div className="Html flex h-6 w-6 items-center justify-center px-1 py-0.5" />
                <div className="Html font-['Maven Pro'] text-center text-base font-normal leading-snug text-neutral-300">
                  HTML
                </div>
              </div>
              <div className="Tag flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <div className="Css flex h-6 w-6 items-center justify-center px-1 py-0.5" />
                <div className="Css font-['Maven Pro'] text-center text-base font-normal leading-snug text-neutral-300">
                  CSS
                </div>
              </div>
              <div className="Tag flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <div className="Javascript flex h-6 w-6 items-center justify-center px-0.5 py-1.5" />
                <div className="Javascript font-['Maven Pro'] text-center text-base font-normal leading-snug text-neutral-300">
                  Javascript
                </div>
              </div>
              <div className="Tag flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <div className="React flex h-6 w-6 items-center justify-center px-0.5 py-1" />
                <div className="React font-['Maven Pro'] text-center text-base font-normal leading-snug text-neutral-300">
                  React
                </div>
              </div>
              <div className="Tag flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <div className="NodeJs flex h-6 w-6 items-center justify-center px-1 py-0.5" />
                <div className="NodeJs font-['Maven Pro'] text-center text-base font-normal leading-snug text-neutral-300">
                  Node.js
                </div>
              </div>
            </div>
          </div>
          <div className="Caretdoubledown inline-flex h-8 w-8 items-center justify-center px-1 pb-1 pt-1.5" />
        </div>
        <div className="Projects flex h-96 flex-col items-center justify-center gap-14 self-stretch px-28 pb-36 pt-16">
          <div className="Header flex h-16 flex-col items-start justify-center gap-2">
            <div className="MeuTrabalho self-stretch text-center font-['Inconsolata'] text-xl font-normal leading-normal text-red-400">
              Meu trabalho
            </div>
            <div className="VejaOsProjetosEmDestaque self-stretch text-center font-['Asap'] text-2xl font-bold leading-7 text-zinc-200">
              Veja os projetos em destaque
            </div>
          </div>
          <div className="Grid inline-flex w-96 items-start justify-center gap-6">
            <div className="Projectcard inline-flex h-72 w-80 flex-col items-center justify-start gap-5 rounded-xl bg-gray-800 p-3">
              <img
                className="Image2 h-40 w-80 rounded-lg"
                src="https://via.placeholder.com/306x156"
                alt="Travelgram project screenshot"
              />
              <div className="Text flex h-20 flex-col items-center justify-start gap-2 self-stretch p-1">
                <div className="Title self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Travelgram
                </div>
                <div className="LoremIpsumDolorSitAmetConsecteturViverraSedLaoreetEuOrnare font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Rede social onde as pessoas mostram os registros de suas viagens pelo mundo
                </div>
              </div>
            </div>
            <div className="Projectcard inline-flex h-72 w-80 flex-col items-center justify-start gap-5 rounded-xl bg-gray-800 p-3">
              <img
                className="Image2 h-40 w-80 rounded-lg"
                src="https://via.placeholder.com/306x156"
                alt="Screenshot of the project"
              />
              <div className="Text flex h-20 flex-col items-center justify-start gap-2 self-stretch p-1">
                <div className="Title self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Zingen
                </div>
                <div className="LoremIpsumDolorSitAmetConsecteturViverraSedLaoreetEuOrnare font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Landing Page completa e responsiva de um aplicativo de Karaokê
                </div>
              </div>
            </div>
            <div className="Projectcard inline-flex h-72 w-80 flex-col items-center justify-start gap-5 rounded-xl bg-gray-800 p-3">
              <img className="Image2 h-40 w-80 rounded-lg" src="https://via.placeholder.com/306x156" alt="Image2" />
              <div className="Text flex h-20 flex-col items-center justify-start gap-2 self-stretch p-1">
                <div className="Title self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Tech News
                </div>
                <div className="LoremIpsumDolorSitAmetConsecteturViverraSedLaoreetEuOrnare font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Homepage de um portal de notícias sobre a área de tecnologia
                </div>
              </div>
            </div>
            <div className="Projectcard inline-flex h-72 w-80 flex-col items-center justify-start gap-5 rounded-xl bg-gray-800 p-3">
              <img className="Image2 h-40 w-80 rounded-lg" src="https://via.placeholder.com/306x156" alt="Image3" />
              <div className="Text flex h-20 flex-col items-center justify-start gap-2 self-stretch p-1">
                <div className="Title self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Refund
                </div>
                <div className="LoremIpsumDolorSitAmetConsecteturViverraSedLaoreetEuOrnare font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Um sistema para pedido e acompanhamento de reembolso{' '}
                </div>
              </div>
            </div>
            <div className="Projectcard inline-flex h-72 w-80 flex-col items-center justify-start gap-5 rounded-xl bg-gray-800 p-3">
              <img className="Image2 h-40 w-80 rounded-lg" src="https://via.placeholder.com/306x156" alt="Image4" />
              <div className="Text flex h-20 flex-col items-center justify-start gap-2 self-stretch p-1">
                <div className="Title self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Página de receita
                </div>
                <div className="LoremIpsumDolorSitAmetConsecteturViverraSedLaoreetEuOrnare font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Página com o passo a passo de uma receita para cupcakes
                </div>
              </div>
            </div>
            <div className="Projectcard inline-flex h-72 w-80 flex-col items-center justify-start gap-5 rounded-xl bg-gray-800 p-3">
              <img className="Image2 h-40 w-80 rounded-lg" src="https://via.placeholder.com/306x156" alt="Image5" />
              <div className="Text flex h-20 flex-col items-center justify-start gap-2 self-stretch p-1">
                <div className="Title self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Página de turismo
                </div>
                <div className="LoremIpsumDolorSitAmetConsecteturViverraSedLaoreetEuOrnare font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Página com as principais informações para quem quer viajar para Busan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Services flex h-96 flex-col items-center justify-center gap-14 self-stretch bg-neutral-950 px-28 pb-28 pt-20">
          <div className="Header flex flex-col items-start justify-center gap-2">
            <div className="MeusServiOs self-stretch text-center font-['Inconsolata'] text-xl font-normal leading-normal text-red-400">
              Meus serviços
            </div>
            <div className="ComoPossoAjudarOSeuNegCio self-stretch text-center font-['Asap'] text-2xl font-bold leading-7 text-zinc-200">
              Como posso ajudar o seu negócio
            </div>
          </div>
          <div className="Grid inline-flex items-start justify-center gap-6">
            <div className="Card inline-flex w-72 flex-col items-start justify-center gap-5 rounded-xl border-2 border-zinc-900 p-5">
              <div className="Devices inline-flex h-12 w-12 items-center justify-center py-2 pl-0.5 pr-px" />
              <div className="Header flex h-12 flex-col items-center justify-start gap-2 self-stretch">
                <div className="WebsitesEAplicativos self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  Websites e Aplicativos
                </div>
                <div className="DesenvolvimentoDeInterfaces font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Desenvolvimento de interfaces
                </div>
              </div>
            </div>
            <div className="Card inline-flex w-72 flex-col items-start justify-center gap-5 rounded-xl border-2 border-zinc-900 p-5">
              <div className="Harddrives inline-flex h-12 w-12 items-center justify-center px-1.5 py-2" />
              <div className="Header flex h-12 flex-col items-center justify-start gap-2 self-stretch">
                <div className="ApiEBancoDeDados self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  API e banco de dados
                </div>
                <div className="CriaODeServiOsDoSistema font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Criação de serviços do sistema{' '}
                </div>
              </div>
            </div>
            <div className="Card inline-flex w-72 flex-col items-start justify-center gap-5 rounded-xl border-2 border-zinc-900 p-5">
              <div className="Infinity inline-flex h-12 w-12 items-center justify-center px-px py-3.5" />
              <div className="Header flex h-12 flex-col items-center justify-start gap-2 self-stretch">
                <div className="Devops self-stretch font-['Asap'] text-base font-bold leading-tight text-zinc-200">
                  DevOps
                </div>
                <div className="GestOEInfraestruturaDaAplicaO font-['Maven Pro'] self-stretch text-sm font-normal leading-tight text-neutral-300">
                  Gestão e infraestrutura da aplicação
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Contact flex h-96 flex-col items-center justify-center gap-12 self-stretch px-28 pb-48 pt-32">
          <div className="Header flex flex-col items-start justify-center gap-2">
            <div className="Contato self-stretch text-center font-['Inconsolata'] text-xl font-normal leading-normal text-purple-400">
              Contato
            </div>
            <div className="GostouDoMeuTrabalho self-stretch text-center font-['Asap'] text-2xl font-bold leading-7 text-zinc-200">
              Gostou do meu trabalho?{' '}
            </div>
            <div className="EntreEmContatoOuAcompanheAsMinhasRedesSociais font-['Maven Pro'] self-stretch text-center text-base font-normal leading-snug text-neutral-300">
              Entre em contato ou acompanhe as minhas redes sociais!
            </div>
          </div>
          <div className="Links flex flex-col items-start justify-start gap-4">
            <div className="Socialbutton inline-flex w-96 items-center justify-center gap-3 rounded-lg bg-gray-800 p-5">
              <div className="Linkedinlogo flex h-7 w-7 items-center justify-center p-0.5" />
              <div className="Linkedin font-['Maven Pro'] shrink grow basis-0 text-base font-medium leading-snug text-neutral-300">
                Linkedin
              </div>
              <div className="Arrowupright flex h-5 w-5 items-center justify-center px-1 py-1" />
            </div>
            <div className="Socialbutton inline-flex w-96 items-center justify-center gap-3 rounded-lg bg-gray-800 p-5">
              <div className="Instagramlogo flex h-7 w-7 items-center justify-center p-0.5" />
              <div className="Linkedin font-['Maven Pro'] shrink grow basis-0 text-base font-medium leading-snug text-neutral-300">
                Instagram
              </div>
              <div className="Arrowupright flex h-5 w-5 items-center justify-center px-1 py-1" />
            </div>
            <div className="Socialbutton inline-flex w-96 items-center justify-center gap-3 rounded-lg bg-gray-800 p-5">
              <div className="Githublogo flex h-7 w-7 items-center justify-start py-0.5 pr-1" />
              <div className="Linkedin font-['Maven Pro'] shrink grow basis-0 text-base font-medium leading-snug text-neutral-300">
                GitHub
              </div>
              <div className="Arrowupright flex h-5 w-5 items-center justify-center px-1 py-1" />
            </div>
            <div className="Socialbutton inline-flex w-96 items-center justify-center gap-3 rounded-lg bg-gray-800 p-5">
              <div className="Envelopesimple flex h-7 w-7 items-center justify-center px-0.5 py-1.5" />
              <div className="Linkedin font-['Maven Pro'] shrink grow basis-0 text-base font-medium leading-snug text-neutral-300">
                E-mail
              </div>
              <div className="Arrowupright flex h-5 w-5 items-center justify-center px-1 py-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
