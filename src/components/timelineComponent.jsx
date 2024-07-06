import React from "react";
import "aos/dist/aos.css";
import fotogarten from "../img/fotogarten.jpg";
import fotoalbero from "../img/fotoalbero.png";
import fotosontoloyo from "../img/fotosontoloyo.jpg";
import fotokotask from "../img/fotokotask.jpg";
import fotobatu from "../img/fotobatu.jpg";
import fotoldr from "../img/fotoldr.jpg";
import fotopostldr from "../img/fotopostldr.jpg";
import fotoultahshanum from "../img/fotoultahshanum.jpg";
import fotobromo from "../img/fotobromo.jpg";
import fotoanniv1 from "../img/fotoanniv1.jpeg";
import fotosmg from "../img/fotosmg.jpg";
import fototrip from "../img/fototrip.jpg";
import fotoanniv2 from "../img/fotoanniv2.jpeg";
import fotospbu from "../img/fotospbu.jpg";
import fotosmg3 from "../img/fotosmg3.jpg";
import fotosidanglissa from "../img/fotosidanglissa.jpg";
import fotobirthdaylissa from "../img/fotobirthdaylissa.jpg";
import fotowisuda from "../img/fotowisuda.jpg";
import fotocamping from "../img/fotocamping.jpg";
import fotoanniv3 from "../img/fotoanniv3.jpeg";
import fotoacara from "../img/fotoacara.jpeg";
import fotoumroh from "../img/fotoumroh.jpeg";
import fotokonser from "../img/fotokonser.jpeg";
import fotodinner from "../img/fotodinner.jpeg";
import fotobelihp from "../img/fotobelihp.jpeg";
import fotowithmama from "../img/fotowithmama.jpeg";
import fotosidangbagus from "../img/fotosidangbagus.jpeg";
import fotokue from "../img/fotokue.jpeg";


const TimelineComponent = () => {
    const timelineData = [
        {
            title: "Pertama Kali Ketemu",
            date: "20 December 2019",
            description: "Kejadian ini nih pertama kali ketemu kamu di Gartenhouse, disini kita lebih ke kenalan ama sharing tentang dunia perkuliahan. Si asik tuh fotonya udah touchy sejak pertama kali ketemu..",
            image: fotogarten,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
            )
        },
        {
            title: "Asik ketemu lagi!",
            date: "01 February 2020",
            description: "Berjumpa lagi di Albero yang bangunannya berubah-ubah mulu sampe sekarang bersama fira, fikrar, iqbal, dan mbak risha",
            image: fotoalbero,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
            )
        },
        {
            title: "Trip pertama kita ke Batu!",
            date: "13 July 2020",
            description: "Akhirnya kita main bareng-bareng nih ke Batu bersama fira, tuban, dan fikrar. Pertama kita ke Kopi Sontoloyo abis tu ke Paralayang. Asik banget dah pokoknya!",
            image: fotosontoloyo,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
            )
        },
        {
            title: "First time jalan berdua!",
            date: "18 January 2021",
            description: "Setelah lama ga ketemu akhirnya ketemu lagi deh. Kali ini jalan berdua ihirr setelah kemarinnya ketemu ga sengaja di 11/12. Disini kita jalan-jalan dari tenthirty ke cak uut dan ke kotask.",
            image: fotokotask,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
            )
        },
        {
            title: "Jalan lagi sebelum ldr 6 bulan",
            date: "9 February 2021",
            description: "Setelah aku confess, akhirnya kita keluar main lagi deh ke Batu berdua. Pulangnya aku badmood karena jawabanmu sangat menggantungkan aku! Tapi abis tu langsung LDR setengah tahun karena covid",
            image: fotobatu,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
            )
        },
        {
            title: "Yah ldr dong selama 6 bulan..",
            date: "25 April 2021",
            description: "Selama 6 bulan ini adalah momen dimana aku berusaha ngeyakinin kamu untuk bisa suka balik sama aku. I thought ini yang dinamakan fase pdkt tapi sebenernya udah confess hihi...",
            image: fotoldr,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Finally, ketemu setelah drama ldr!",
            date: "19 Agustus 2021",
            description: "Akhirnya setelah sekian lama gabisa ketemu karena covid, akhirnya kita bisa ketemu. Disini aku jemput kamu di Surabaya yang aku nyasar sampe ke tol gresik...",
            image: fotopostldr,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Moment before disaster",
            date: "14 September 2021",
            description: "Ini pertama kalinya kamu ke acara keluargaku di acara ultah shanum hihi. Tapi, beberapa hari setelah ini ada kejadian mama gaada...",
            image: fotoultahshanum,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Trip to Bromo",
            date: "21 December 2021",
            description: "Ini first trip kita ke Bromo bareng fira, fikrar, ogi, dan ketambahan mas mon. Disini kita dibantuin mas mon buat kemana-mana dan dikasih penginapan di rumah warga",
            image: fotobromo,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Anniv ke-1!",
            date: "11 January 2022",
            description: "Pertama kalinya kita ngerayain anniv nih di Latar Ijen. Inget banget disini kita tukeran kado. Kok keliatannya masih jaim-jaim gimana gitu...",
            image: fotoanniv1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Pertama kali nyamperin ke Semarang",
            date: "9 April 2022",
            description: "First time nih nyamperin kamu ke semarang. Terus diajak kemana-mana sama kamu ama temenmu. Foto di bawah ini kita makan chinese food di Cak Eco",
            image: fotosmg,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Trip terjauh kita ke Banyuwangi!",
            date: "9 December 2022",
            description: "For the first time kita trip terjauh yang plannya dan hasilnya juga ga terduga. Mana ada drama lagi gabisa naik kereta karena aku harus vaksin booster:( But it really memorable at all...",
            image: fototrip,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Anniv ke-2!",
            date: "19 January 2023",
            description: "Finally ga kerasa udah 2 tahun sama kamu. Disini kita ngerayain di Djati Lounge dengan pas berangkatnya kita bertengkar mini hehe... ",
            image: fotoanniv2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Nemenin bubby ambil data!",
            date: "23 February 2023",
            description: "Disini aku nemenin bubby ambil data di SPBU Banjarejo. Mulai dari ambil kue terus bantuin ambil data di SPBU terus aku juga numpang interview MBKM hehehe...",
            image: fotospbu,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Nyamperin bubby lagi ke Semarang!",
            date: "18 March 2023",
            description: "Aku nyamperin bubby lagi ke Semarang, sekaligus kita jalan-jalan keliling Semarang. Dari kota tua, tembalang, menelusuri srondol, terus keluar sama temen-temen bubbyy",
            image: fotosmg3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Finally, Nurkhalissa Mahdanie, S.KM (uo)",
            date: "30 June 2023",
            description: "Finally, akhirnya bubby menamatkan perkuliahan menjadi Sarjana Kesayangan Mertua. Huhu sad banget aku gabisa nyamperin bubby karena aku juga kebetulan lagi UAS",
            image: fotosidanglissa,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Birthday bubby with the view!",
            date: "8 July 2023",
            description: "Ditengah-tengah kamu nemenin aku magang di Surabaya. We have a birthday dinner with the view banget ga sihh. Tema outfitnya blacky one yah hihi..",
            image: fotobirthdaylissa,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Dateng ke wisuda bubby!",
            date: "8 August 2023",
            description: "Ini sih momen yang paling aku bikin deg-degan karena for the first time ketemu ayahmu. Bela-belain izin sakit di kantor terus sore udah buru-buru balik ke Surabaya. Congratulations bubby!",
            image: fotowisuda,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Ranu regulo camping!",
            date: "20 December 2023",
            description: "Diantara camping-camping lainnya, ini paling seru sihh! eh padahal camping juga cuman 2 kali yah hihi...",
            image: fotocamping,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Anniv ke-3!",
            date: "11 January 2024",
            description: "Alhamdulillah it's been 3 years with you, kita ngerayainnya di Akasia sampe makannya kenyang bego.. Kita tukeran kado, aku ngasih kamu bunga kamu ngasih aku lego Initial D!!!",
            image: fotoanniv3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Acara pernikahan papa",
            date: "26 January 2024",
            description: "It's been really hard for me tbh, tapi ada kamu yang selalu nemenin aku dan nguatin aku pas di acara ini. Thank you so much yah cantik!",
            image: fotoacara,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Alhamdulillah Umroh",
            date: "22 February 2024",
            description: "Karena kamu sebelumnya udah ngasih aku mini gift, aku bawa nih bih didepan ka'bah dan doain semua hajat-hajat aku dan kamu.",
            image: fotoumroh,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Sunset di Kebun!",
            date: "2 March 2024",
            description: "For the first time, akhirnya kita ikutan konser nih asik banget. Banyak kejadian unik, mulai dari tiba-tiba ujan ampe becek lumpur. Terus bubby bisa lihat artis kesukaan bubby...",
            image: fotokonser,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Bukber with kakak-kakak!",
            date: "22 March 2024",
            description: "Kita buka bersama bareng nih sama kakak-kakak bagus. Agak kejadian langka yah bisa keluar ama semuanya bareng tanpa papa & bu atik. We have a good dinner tbh..",
            image: fotodinner,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Akhirnya bubby ganti hp!",
            date: "25 April 2024",
            description: "Finally bubby ganti hp keren!!! walaupun hpnya masih nyicil sampe sekarang HAHAHA, but ini emang bubby butuh banget sikk. Sempet bingung antara beli yang warna item atau pink..",
            image: fotobelihp,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Ketemu mama before bubby kerja!",
            date: "26 April 2024",
            description: "Karena setelah ini bakal ditinggal bubby ke Aceh, we decided to visit mama buat nyekar dan kamu sekalian pamit buat kerja ke Aceh. Huhu era LDR akan segera dimulai...",
            image: fotowithmama,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Akhirnya bagus menyusul lulus!",
            date: "19 June 2024",
            description: "Alhamdulillah dengan segala drama yang aku laluin, finally Bagus nyusul kamu lulus. Even kamu gaada disini nemenin aku, but kamu berusaha keras buat make me happy!",
            image: fotosidangbagus,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            title: "Ultah aku yang FYP!",
            date: "21 June 2024",
            description: "Kita ngerayain ultah bareng dinner lewat facetime terus ada surprise kue dari kamu! terus ada si bocil shanum yang akhirnya dikontenin jadi FYP di tiktok ampe 400K views!",
            image: fotokue,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        }
    ]

    return (
        <div id="timeline" className="bg-white">
            <div className="relative isolate px-5 pt-8 lg:px-8">
                <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                    <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
                        Our
                        <span style={{ color: "#a17fe0" }}> Journey</span><span></span>
                    </h1>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {/* Timeline Card */}
                        {timelineData.map((item) => {
                            return (
                                <>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up">
                                        {/* Icon */}
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-hover text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            {item.icon}

                                        </div>
                                        {/* Card */}
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg border border-slate-200 shadow">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-slate-900">{item.title}</div>
                                                <time className="font-caveat font-medium text-purple">
                                                    {item.date}
                                                </time>
                                            </div>
                                            <div className="text-slate-500">
                                                {item.description}
                                                {item.image && <img src={item.image} alt={item.title} className="img-square rounded-lg mt-3" />}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {/* Item Terakhir */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-gradient-to-r from-purple to-green-hover text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>

                            </div>
                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900">Happy Birthday Nurkhalissa Mahdanie!</div>
                                    <time className="font-caveat font-medium text-purple">
                                        Now
                                    </time>
                                </div>
                                <div className="text-slate-500">
                                    Are you ready sayang for the next big step? Yuk sayang semangat terus yah masih ada next journey yang harus kita laluin bareng-bareng!!!
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#59C173] to-[#a17fe0] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TimelineComponent