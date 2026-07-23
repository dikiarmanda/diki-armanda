export type Portfolio = {
  title: string;
  desc: string;
  img: string;
  link: string;
  tags: string[];
};

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  name: "Diki Armanda",
  fullName: "Mokhamad Diki Armanda",
  title: "Software Engineer & Lecturer",
  quote:
    "Barangsiapa mengerjakan kebaikan seberat zarrah, niscaya dia akan melihat balasannya. — QS. Az-Zalzalah: 7",
  roles: [
    "Software Engineer",
    "Lecturer",
    "Frontend Developer",
    "Graphic Designer",
    "Backend Developer",
    "Gunpla Collector",
  ],
  social: {
    github: "https://github.com/dikiarmanda",
    instagram: "https://www.instagram.com/diki.armanda0/",
    whatsapp: "https://api.whatsapp.com/send?phone=6285646231475",
  },
  about: `Halo! Saya Diki Armanda, lulusan program studi Informatika dari Universitas Muhammadiyah Sidoarjo. Pendidikan saya memberikan fondasi yang kuat di bidang teknologi informasi.

Selama kuliah, saya tidak hanya fokus pada studi akademis tetapi juga aktif dalam berbagai kegiatan — mulai dari pengabdian masyarakat hingga menyelenggarakan workshop untuk membantu teman-teman mahasiswa meningkatkan keterampilan Software Engineer.`,
  techStack: [
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  ],
};

export const portfolios: Portfolio[] = [
  {
    title: "Papan Binangun",
    desc: "Website wisata Binangun, Kabupaten Pasuruan. Tidak hanya menampilkan informasi wisata, tetapi juga sebagai sistem reservasi paket wisata dan homestay serta e-commerce produk UMKM Binangun.",
    img: "/images/portfolios/papanBinangun.png",
    link: "https://papanbinangun.id/",
    tags: ["CodeIgniter", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Cari Jurnal",
    desc: "Aplikasi untuk memudahkan pengguna mencari portal jurnal sesuai preferensi. Dilengkapi informasi publication fee agar pengguna mengetahui biaya publikasi di setiap portal.",
    img: "/images/portfolios/cariJurnal.png",
    link: "https://cari-jurnal.vercel.app/",
    tags: ["React", "Vercel"],
  },
  {
    title: "VARK Model",
    desc: "Alat edukasi untuk mengidentifikasi gaya belajar Visual, Aural, Read/Write, atau Kinesthetic melalui kuis analisis, dengan saran strategi belajar yang disesuaikan.",
    img: "/images/portfolios/varkModel.png",
    link: "https://dikiarmanda.github.io/vark-model/",
    tags: ["Education", "Web App"],
  },
  {
    title: "Sistem Persamaan Non Linier",
    desc: "Aplikasi komputasi numerik untuk menyelesaikan sistem persamaan non linier — proyek mata kuliah Metode Numerik.",
    img: "/images/portfolios/aplikasiSistemPersamaanNonLinier.png",
    link: "https://diki001metnum.netlify.app/",
    tags: ["Numerik", "Netlify"],
  },
];

export const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#techstack", label: "Keahlian" },
  { href: "#portfolios", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];
