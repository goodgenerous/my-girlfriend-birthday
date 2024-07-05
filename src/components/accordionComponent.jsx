import React from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import fotocamping from "../img/fotocamping.jpg"

const AccordionComponent = () => {
    return (
        <>
            <div className="bg-white min-h-screen flex flex-col items-center justify-center space-y-6">
                <h1 className="text-5xl font-bold text-gray-900 sm:text-4xl mb-5">
                    Definisi seorang <span className="text-purple"> Lissa </span> menurut Bagus! &#129488;
                </h1>
                <Accordion collapseAll className="w-1/2">
                    <AccordionPanel >
                        <AccordionTitle>Siapa sih Nurkhalissa Mahdanie a.k.a Lissa a.k.a Bubby? &#128561;</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Ini dia orang yang tertangguh, terindah, tercantik, terkuat, terhebat yang pernah Bagus temuin seumur hidup. Hari-harinya dia selalu ceria 
                                meskipun banyak beban hidup yang harus dijalani. Orang yang selalu mementingkan kebahagiaan orang lain diatas kebahagiaan dia sendiri. Selalu totalitas
                                untuk ngasih yang terbaik untuk orang lain &#128150;
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Orang yang selalu ceria tiap harinya! &#129322;</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Menurut bagus tu bubby termasuk orang yang tiap-harinya tu selalu ceria, kek pasti ada aja gitu yang bikin bagus tu kok ini bubby ga capek apa ya ceria terus dan
                            kamu tu selalu cari ide yang kadang ga kepikiran gitu! &#128523;
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Orang yang selalu punya 1000 ide! &#128200;</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Sumpah ya bih keknya kalo ada temen sekelas yang aku jadiin buat ketua kelompok pasti kamu deh, kek kamu tu orang yang selalu punya ide-ide yang ga terpikirkan oleh siapapun.
                            Pasti tu idemu tu nyleneh tapi kalo dipikir-pikir kek bagus banget gitu loh. Apalagi kalo udah masalah surprise-in cowonya yah. Wah bukan maen brok, pasti ada aja yang dibikin.
                            Makasih yah sayang selama ini kamu udah selalu mencari ide biar hubungan kita tu ga gitu-gitu aja! &#128139;
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Orang yang hari ini udah 23 tahun! &#127874;</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Semoga sayang tetap diberikan kesehatan, keselamatan, kebahagiaan di tiap harinya yang paling penting. Semoga juga bubby dilancarkan segala urusannya, bisa mencapai impian yang bubby mau, dan lebih kuat dari hari-hari sebelumnya.
                            Jangan lupa ya bih harus tetap perhatiin diri kamu sendiri ya, u deserve untuk bahagiain diri sendiri dulu sebelum bahagiain orang lain. &#127882;
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>

            </div>
        </>
    )
}

export default AccordionComponent;