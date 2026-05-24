import React from "react";

const Timeline = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <main className="relative">
        {/* <!-- Section: 2022 --> */}
        <section className="relative h-screen  w-full flex items-center justify-center overflow-hidden bg-surface">
          <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
            {/* <!-- Achievement Card --> */}
            <div className="glass-card p-10 max-w-md rounded-xl absolute left-10 md:left-24 top-1/2 -translate-y-1/2 shadow-2xl">
              <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
                Foundation Year
              </p>
              <h3 className="text-4xl font-headline font-extrabold mb-6 leading-tight">
                Digital Renaissance
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Redefined the visual language for three Fortune 500 tech giants,
                focusing on immersive spatial interfaces and kinetic typography
                systems.
              </p>
              <div className="flex items-center gap-4 text-primary font-label text-[10px] tracking-widest font-bold">
                <span className="w-8 h-[2px] bg-primary"></span>3 PROJECTS COMPLETED
              </div>
            </div>
            {/* <!-- Floating Images --> */}
            <div className="hidden lg:block absolute right-[15%] top-[20%] w-72 h-96 rounded-xl overflow-hidden -rotate-6 shadow-2xl group transition-transform hover:scale-105 duration-500">
              <img
                alt="Work 2022"
                className="w-full h-full object-cover"
                data-alt="Abstract 3D digital landscape with neon lines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPs6ivBOm2PedHeVeFQ9P8M68jMCoM3kNHDnKZWOgGSxUIEGW4QLSsEFvLcMc-UaA5EWtfiynl9XzngQXUuOAldpoqsKy-eLEzt7B_mXfjFbYNtpSE1bjtSZtiYtQzL4EV2ruaN77YtTumAVLlP9AWEoArNqS3UOysNL4laMhdSDHFNi0_Ss_Uy7OGn7xRqzat1UwK7khdB1x7hCne-_692fcgo8DSFwQ6vItr-oe30k6GcHmXgYs68hdI7WcuUVp44iW3jHWGbQ"
              />
            </div>
            <div className="hidden lg:block absolute right-[5%] bottom-[15%] w-64 h-80 rounded-xl overflow-hidden rotate-12 shadow-2xl group transition-transform hover:scale-105 duration-500">
              <img
                alt="Work 2022 Secondary"
                className="w-full h-full object-cover"
                data-alt="Close up of futuristic glowing user interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeHrJB8VV9FuC0M8vCUpUC9e1LqKNRbLoogDMQUabW14q5tC0TJnV7rEh5orrF5niup7oTeMnuiYD-Tjffnt9P_8RyCiprvpecjv3DDAXAN-Jcz5LpRKcu1dLyNxPGJvDUrbXEKIv5gjT25p_-JuMZcH7ZqTm6ROHIeRjsDOCsCsUcmVxL5jkgmu4c-MncZkXZKQ5FWaJPQk_GpGn8ruE_hsn11rA5RFGWIs6gavPfymZw_LNct_5t_fwXQWWAx9tqo4iKmgWJuA"
              />
            </div>
          </div>
        </section>
        {/* <!-- Section: 2023 --> */}
        <section className="relative h-screen flex w-full  items-center justify-center overflow-hidden bg-surface-container-low">
          
          <div className="container mx-auto px-6 h-full relative z-10 flex flex-row-reverse items-center">
            <div className="glass-card p-10 max-w-md rounded-xl absolute right-10 md:right-24 top-1/4 shadow-2xl">
              <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
                The Expansion
              </p>
              <h3 className="text-4xl font-headline font-extrabold mb-6 leading-tight">
                Systemic Thinking
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Led the architectural redesign of the 'Nebula' design system,
                currently serving over 1.2M developers worldwide. Focus on
                accessibility and scalability.
              </p>
              <div className="flex items-center gap-4 text-primary font-label text-[10px] tracking-widest font-bold">
                <span className="w-8 h-[2px] bg-primary"></span>
                SENIOR LEAD ROLE
              </div>
            </div>
            {/* <!-- Floating Images --> */}
            <div className="hidden lg:block absolute left-[10%] top-[15%] w-80 h-[500px] rounded-xl overflow-hidden rotate-3 shadow-2xl">
              <img
                alt="Work 2023"
                className="w-full h-full object-cover"
                data-alt="Minimal tech workspace with green ambient lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyzTmrjv3CkbwedcdUGE8GCf8KKUa9-jxApW8ov9VfUv7w2km8QQR_iAd6Sv5PU8aOIr6jV4IFrUGM0ktBTtTj0hzRtw6HzG2nkLR_XHpvJM4BNPjpXqP8NnHwaXsKuoo_w7nd220pBI8ySMvngS7XFetq7fmDM4ABRliukV_CTINXOigPPthY-JSF7jR9ttpsTiQUpB86aw9jhSGHSb-TDyMQTnRmvWgZ9fccC0PJbVOkXQxUna7NDaqKzzRXYT0QEA_cfAqUeQ"
              />
            </div>
            <div className="hidden lg:block absolute left-[25%] bottom-[10%] w-56 h-72 rounded-xl overflow-hidden -rotate-12 shadow-2xl">
              <img
                alt="Work 2023 Secondary"
                className="w-full h-full object-cover"
                data-alt="Abstract fluid green gradients and shapes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIZY7E6-Dq7FedVTvBTJj1fG_G9p10m6zuFb_KlhS4fvERSJ7dbZrYeP8PUC2i2ZswxIjf8jgyAUKnlAmfFwwMSatahx5ib8gbIENRS-dkUF72Yvo-etq_VOxiU4J-sGVcKh2IpQi9ydfNCBaVUKvedsJLOZb1EKcDfbITNT6CW2Ohcpd2Xv0S9w2ba2QIyikj0WUsRFlusQperBRbeFOeQk9B5zvCC27xXsnloMBOBrrSoT7lBTm-i5wGLz4HkqVeU4SWTn_DyA"
              />
            </div>
          </div>
        </section>
        {/* <!-- Section: 2024 --> */}
        <section className="relative h-screen flex w-full  items-center justify-center overflow-hidden bg-surface">
         
          <div className="container mx-auto px-6 h-full relative z-10 flex items-center justify-center">
            <div className="glass-card p-12 max-w-2xl rounded-xl shadow-2xl text-center">
              <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-6">
                Current Era
              </p>
              <h3 className="text-5xl font-headline font-extrabold mb-8 leading-tight">
                The AI Integration
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                Pioneering generative UI workflows. Crafting experiences that
                bridge the gap between human intuition and machine intelligence.
              </p>
              <button className="border border-primary text-primary px-8 py-3 rounded-full font-label text-[10px] tracking-widest font-bold hover:bg-primary hover:text-on-primary transition-all">
                EXPLORE CASE STUDY
              </button>
            </div>
            {/* <!-- Floating Images --> */}
            <div className="hidden lg:block absolute left-[5%] bottom-[20%] w-72 h-80 rounded-xl overflow-hidden -rotate-12 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
              <img
                alt="Work 2024"
                className="w-full h-full object-cover"
                data-alt="Neural network visualization with bright green points"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRedYxrRXvVAqCBPscUxLMdTQ9dGcqZXlK-wAvg8bJSAjSFpLzSx6lzfoL68z_7C4BTzm6O1bvEfz0cHtiTf3FMVycpwab6ojobkU2SWvztmpduF6NQHb59Gxc3vvDgTHn8Xb_PXCbIZRlT-hSGc2OigIulNKyjKsLboJZ_5tPoD6-xWee6xM9lOnuQrfEcGaV8hlLm2iHEOO5xF_xCA_NOyUOAbOcr2xOqhxG4dVACn0EFdgd3eJRT_eiskZSnZ8O3CdA2pffmQ"
              />
            </div>
            <div className="hidden lg:block absolute right-[5%] top-[15%] w-72 h-80 rounded-xl overflow-hidden rotate-6 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
              <img
                alt="Work 2024 Secondary"
                className="w-full h-full object-cover"
                data-alt="Prismatic light diffraction on dark surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfERkbLpSlnkLRH8UosKDO4BytLvQp8AhmNxN2omuosS1YROMeji7YIFAgsk1oAij4gXtDm5RFXqvTNCmo42T2r7FvUda7eca4MmxuIwocDdYLRSAsqTbnvb5RUvCv3-tQ2bv3cVrjzFddSglk5Ih30iDYkrbW3e6iWeIypNjuKddQUQlxbnrj1MuIzCKNz1-m1LA8gghfrWiRsdFPRJISP5UwahtS-arKU0HKDOu26CWOsZyz2_hSuKDM2A7v9vUIxEW0y1aH_A"
              />
            </div>
          </div>
        </section>
        {/* <!-- Section: 2025 --> */}
        <section className="relative h-screen flex w-full  items-center justify-center overflow-hidden bg-surface-container-low">
         
          <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
            <div className="glass-card p-10 max-w-md rounded-xl absolute left-10 md:left-24 bottom-24 shadow-2xl">
              <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
                The Horizon
              </p>
              <h3 className="text-4xl font-headline font-extrabold mb-6 leading-tight">
                Ethical Futures
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Speculating on the next decade of digital interaction.
                Prototyping calm-tech solutions and sustainable digital
                ecosystems.
              </p>
              <div className="flex gap-4">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label text-xs font-bold text-on-surface uppercase tracking-widest">
                  Ongoing Mission
                </span>
              </div>
            </div>
            {/* <!-- Floating Images --> */}
            <div className="hidden lg:block absolute right-[20%] top-[10%] w-[450px] h-[300px] rounded-xl overflow-hidden -rotate-2 shadow-2xl">
              <img
                alt="Work 2025"
                className="w-full h-full object-cover"
                data-alt="Satellite view of Earth at night with grid overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHzokEJI1Gg8J6RAn5MK3kCPiNTPApuqaPfvmT2wodzRd5BciDC35eDiO1YY6OADFcY0BSV3mIzj7PsOtE0w2qN3NbfNuEH3VyhDVRuI1VqsxLVhFG4c41LtxHT7wPWu3YlSZXkw46vmrnEFNq0Fw_aN-VY9D-XdjUfX6eOeYR0XmEcLvIzy8V9nqlkn_LCp7ut2N-7BJogkGmlsDo4cu4-STvI41u5f9MfB2dSKhA4hntbc53Mu_t8t_ElQhVIPUqSTswt8G1wA"
              />
            </div>
            <div className="hidden lg:block absolute right-[10%] bottom-[25%] w-64 h-64 rounded-xl overflow-hidden rotate-[15deg] shadow-2xl">
              <img
                alt="Work 2025 Secondary"
                className="w-full h-full object-cover"
                data-alt="Hyper-detailed electronic circuit board with green light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDRKsljRUuzbTxBa_hzXoWzxa-Vzl7Nh0lTmfGiFkvTFAd0V1y-ZeAeDzdVjeDt43rPFNAcWkm6f7TP9FpZjKIbDpGRmDdN0eFAbwX5S4WLrvVMbou_TXSoCDjL8zyOuTOaZM_0fZUZ3Rzq1e0WTzkJXqea3lChS_Me5dx8Hm44ZLa9zCFKn7JKvz4KdMWl64iVar3WUy0Vf340QLPpeEiHsSvG9H7EwHayfTCeRwVnoo2vFe6urDL88SZIOJTcrpOsS3IKtqjfA"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Timeline;
