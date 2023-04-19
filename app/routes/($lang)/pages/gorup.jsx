import React from 'react';

export default function gorup() {
  return (
    <>
      <div className="container mt-[120px] lg:mt-[200px]">
        <section className="banner-with-title">
          <h1 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px] mb-[20px] lg:mb-[30px]">
            Gruppe
          </h1>
          <div className="product-list-hero-img relative overflow-hidden rounded-xl pb-[35%] min-h-[400px]">
            <img
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              src="https://cdn.shopify.com/s/files/1/0742/9688/5569/files/Manufaktur_1200x800px_05.jpg_122.png?v=1681807071"
              alt=""
            />
          </div>
        </section>
        <section className="rich-text-sec mt-[66px]">
          <div className="rich-text-inner">
            <div className="title-wrap">
              <h2 className="title text-[#00795C] text-[35px] lg:text-[40px] xl:text-[65px] tracking-[-1.05984px] mb-[20px] lg:mb-[30px] leading-[1.1]">
                Values
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-[30px] gap-x-[57px]">
              <div className="col-left w-[50%]">
                <div className="desc text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4]">
                  <p>
                    Es geht unserer Firma gut, weil wir die besten
                    Mitarbeiterinnen und Mitarbeiter haben. Wir erschaffen ein
                    Fundamente damit Sie Freude an der arbeiten haben. Wir
                    fördern Sie und unterstützen Sie dabei, Ihre Berufung zu
                    finden und die gottgegebenen Talente richtig einzusetzen.
                  </p>
                </div>
                <div className="box bg-[#EDEDED] rounded-[10px] px-[39px] py-[45px] mt-[32px]">
                  <div className="flex flex-col lg:flex-row">
                    <div className="title-wrap w-[40%]">
                      <h3
                        className="text-[35px] text-[#00795C] font-bol
                      leading-[1.2]"
                      >
                        Wir wachsen gemeinsam mit unseren Partnern und
                        erschaffen dabei immer Win-Win Situationen
                      </h3>
                    </div>
                    <div className="desc w-[60%]">
                      <ul className="list-disc list-outside flex flex-col gap-[15px] text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] pl-[40px]">
                        <li>Wir geben immer unser Bestes.</li>
                        <li>
                          Foster and embrace a climate that breeds originality.
                        </li>
                        <li>
                          Cultural fit is a must. We employ people who match our
                          company value and vision.
                        </li>
                        <li>
                          Wir lernen mit Widerstand (Schwierige Zeiten)
                          umzugehen. Der Weg ist das Ziel.
                        </li>
                        <li>
                          Wir prüfen stets neue Wege. Wir schauen vorwärts, sind
                          mutig und optimistisch.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-right w-[50%]">
                <div className="title-wrap">
                  <h3
                    className="text-[35px] text-[#00795C] font-bol
                      leading-[1.2] mb-[20px]"
                  >
                    Mit uns Zusammenzuarbeiten soll Freude machen und einfach
                    sein. Wir sind ein Vorbild für unsere Partner.
                  </h3>
                </div>
                <div className="desc">
                  <ul className="list-disc list-outside flex flex-col gap-[15px] text-[25px] text-black tracking-[-0.400697px] font-normal leading-[1.4] pl-[40px]">
                    <li>Wir achten darauf das unsere Arbeit und unsere Produkte makellos sind.</li>
                    <li>Beim Kundenversprechen gehen wir kein Kompromiss ein, Design folgt Funktion. Unsere Kunden erleben dabei einen ungewohnt guten Service an allen Touchpoints unsere Marke.</li>
                    <li>Jede Person die unsere Geschichte nicht erzähle kann, ist ein verlorener Botschafter.</li>
                    <li>Nichts ist selbstverständlich. Alles ist eine Gnade Gottes. Wir dürfen uns nicht zu wichtig nehmen. Kybun Joya ist «ein Baugerüst» für etwas viel Größeres. (Lebensziel jedes einzelnen, MA, Partner und Kunden: «Was will ich einmal hinterlassen?»)</li>
                    <li>Durch unsere Tätigkeit sollen Menschen berührt werden.</li>
                    <li>In den Regionen, in denen wir tätig sind, schaffen wir positiven Impact.</li>
                    <li>Wir arbeiten mit folgender Mentalität: We are in Business 50 years from now!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
