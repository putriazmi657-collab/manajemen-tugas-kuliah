
import "./index.css";
import "./App.css";

// Konfigurasi aplikasi dari environment variables
const APP_NAME: string = import.meta.env.VITE_APP_NAME || "Taskly";
const APP_VERSION: string = import.meta.env.VITE_APP_VERSION || "1.0.0";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemen #app tidak ditemukan");
}

app.innerHTML = `
  <div class="app">
    <header class="header">
      <div class="header-content">
        <div class="brand">
          <div class="brand-icon">T</div>
          <div>
            <h1>${APP_NAME}</h1>
            <p>Manajemen Tugas Kuliah</p>
          </div>
        </div>

        <div class="student-info">
          <strong>Azmi Putri Kuswandi</strong>
          <span>1247050126</span>
        </div>
      </div>

      <nav class="navigation" aria-label="Navigasi utama">
        <a href="#dashboard">Dashboard</a>
        <a href="#form-panel">Tambah Tugas</a>
        <a href="#daftar-tugas">Daftar Tugas</a>
      </nav>
    </header>

    <main class="main-content">
      <section class="welcome-section" id="dashboard">
        <h2>Halo, Azmi! &#128075;</h2>
        <p>Kelola tugas kuliahmu dengan lebih mudah dan teratur.</p>
      </section>

      <section class="stats-grid">
        <div class="stat-card">
          <span class="stat-icon">&#128218;</span>
          <p>Total Tugas</p>
          <h2 id="total-tasks">0</h2>
        </div>

        <div class="stat-card">
          <span class="stat-icon">&#9203;</span>
          <p>Belum Selesai</p>
          <h2 id="pending-tasks">0</h2>
        </div>

        <div class="stat-card">
          <span class="stat-icon">&#10003;</span>
          <p>Selesai</p>
          <h2 id="completed-tasks">0</h2>
        </div>
      </section>

      <section class="panel" id="form-panel">
        <div class="section-heading">
          <div>
            <h2 id="form-title">Tambah Tugas Baru</h2>
            <p>Lengkapi informasi tugas kuliahmu.</p>
          </div>
          <span class="heading-icon">&#128221;</span>
        </div>

        <form id="task-form" class="task-form">
          <div class="form-group">
            <label for="title">Nama Tugas</label>
            <input id="title" type="text" placeholder="Masukkan nama tugas" required>
          </div>

          <div class="form-group">
            <label for="subject">Mata Kuliah</label>
            <input id="subject" type="text" placeholder="Masukkan mata kuliah" required>
          </div>

          <div class="form-group">
            <label for="description">Deskripsi</label>
            <textarea id="description" placeholder="Deskripsi tugas"></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="deadline">Deadline</label>
              <input id="deadline" type="date" required>
            </div>

            <div class="form-group">
              <label for="priority">Prioritas</label>
              <select id="priority">
                <option value="Rendah">Rendah</option>
                <option value="Sedang" selected>Sedang</option>
                <option value="Tinggi">Tinggi</option>
              </select>
            </div>
          </div>

          <button type="submit" id="submit-button" class="primary-button">
            Tambah Tugas
          </button>

          <button type="button" id="cancel-edit" class="action-button" hidden>
            Batal Edit
          </button>
        </form>
      </section>

      <section class="panel" id="daftar-tugas">
        <div class="section-heading">
          <div>
            <h2>Daftar Tugas</h2>
            <p>Kelola dan pantau semua tugas kuliahmu.</p>
          </div>
          <span class="heading-icon">&#128203;</span>
        </div>

        <div class="filter-section">
          <div class="search-box">
            <span>&#128269;</span>
            <input id="search" type="search" placeholder="Cari tugas atau mata kuliah...">
          </div>

          <select id="filter" class="filter-select">
            <option value="Semua">Semua Tugas</option>
            <option value="Belum Selesai">Belum Selesai</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        <div id="task-list" class="task-list"></div>
      </section>

      <section class="panel technology-section" id="teknologi">
        <div class="section-heading">
          <div>
            <h2>Teknologi yang Digunakan</h2>
            <p>Teknologi yang digunakan dalam pengembangan aplikasi Taskly.</p>
          </div>
        </div>

        <div class="technology-grid">
          <article class="technology-card">
            <h3>1. Git dan GitHub</h3>
            <p>Git digunakan untuk mengelola perubahan dan riwayat source code. GitHub digunakan untuk menyimpan repository secara online, mengelola branch, commit, merge, dan Pull Request.</p>
          </article>

          <article class="technology-card">
            <h3>2. npm</h3>
            <p>npm (Node Package Manager) digunakan untuk mengelola package dan dependency. npm juga menjalankan perintah npm run dev untuk pengembangan dan npm run build untuk membuat versi produksi.</p>
          </article>

          <article class="technology-card">
            <h3>3. TypeScript</h3>
            <p>TypeScript digunakan untuk menulis JavaScript dengan sistem tipe data. Pada Taskly digunakan string, number, boolean, array, interface, type alias, union type, dan generic agar kode lebih terstruktur.</p>
          </article>

          <article class="technology-card">
            <h3>4. Vite</h3>
            <p>Vite merupakan build tool yang menyediakan development server dan membantu proses build aplikasi. Hasil build disimpan dalam folder dist agar siap diunggah ke hosting.</p>
          </article>

          <article class="technology-card">
            <h3>5. Environment Variables</h3>
            <p>Environment variables digunakan untuk menyimpan konfigurasi aplikasi. Taskly menggunakan file .env untuk nama dan versi aplikasi, sedangkan .env.example menjadi contoh konfigurasi. File .env tidak diunggah ke repository.</p>
          </article>

          <article class="technology-card">
            <h3>6. Compiler, Transpiler, dan Bundler</h3>
            <p>Compiler TypeScript (tsc) memeriksa tipe data dan kesalahan kode. Transpiler mengubah TypeScript menjadi JavaScript. Bundler dalam proses build Vite menggabungkan dan mengoptimalkan JavaScript, CSS, serta aset menjadi file produksi.</p>
          </article>
        </div>
      </section>

    </main>

    <footer class="footer">
      &copy; 2026 ${APP_NAME} v${APP_VERSION} - Manajemen Tugas Kuliah
      <p>Dibuat oleh Azmi Putri Kuswandi</p>
    </footer>
  </div>
`;

// Tipe data tugas
interface Task {
  id: number;
  title: string;
  subject: string;
  description: string;
  deadline: string;
  priority: "Rendah" | "Sedang" | "Tinggi";
  completed: boolean;
}

// Type alias dan union
type TaskStatus = "Semua" | "Belum Selesai" | "Selesai";

// Array tugas
let tasks: Task[] = [];

// Generic untuk membaca data
function loadData<T>(key: string, fallback: T): T {
  const savedData = localStorage.getItem(key);

  if (!savedData) {
    return fallback;
  }

  try {
    return JSON.parse(savedData) as T;
  } catch {
    return fallback;
  }
}

// Memuat tugas dari penyimpanan
tasks = loadData<Task[]>("taskly_tasks", []);

// Menyimpan tugas ke localStorage
function saveTasks(): void {
  localStorage.setItem("taskly_tasks", JSON.stringify(tasks));
}

// Menghitung statistik tugas
function updateStats(): void {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  document.querySelector("#total-tasks")!.textContent = String(total);
  document.querySelector("#pending-tasks")!.textContent = String(pending);
  document.querySelector("#completed-tasks")!.textContent = String(completed);
}

// Menampilkan daftar tugas
function renderTasks(): void {
  const taskList = document.querySelector<HTMLDivElement>("#task-list")!;
  const search = document.querySelector<HTMLInputElement>("#search")!.value.toLowerCase();
  const filter = document.querySelector<HTMLSelectElement>("#filter")!.value as TaskStatus;

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search) ||
      task.subject.toLowerCase().includes(search);

    const matchesFilter =
      filter === "Semua" ||
      (filter === "Selesai" && task.completed) ||
      (filter === "Belum Selesai" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <span>&#128218;</span>
        <h3>Belum Ada Tugas</h3>
        <p>Tambahkan tugas kuliahmu untuk mulai mengelolanya.</p>
      </div>
    `;
  } else {
    taskList.innerHTML = filteredTasks.map((task) => `
      <article class="task-card ${task.completed ? "completed" : ""}">
        <div class="task-top">
          <span class="priority ${task.priority.toLowerCase()}">
            ${escapeHTML(task.priority)}
          </span>

          <span class="status ${task.completed ? "done" : "pending"}">
            ${task.completed ? "Selesai" : "Belum Selesai"}
          </span>
        </div>

        <h3>${escapeHTML(task.title)}</h3>
        <p class="task-subject">${escapeHTML(task.subject)}</p>
        <p class="task-deadline">Deadline: ${escapeHTML(task.deadline)}</p>

        ${task.description ? `
          <div class="task-description">
            ${escapeHTML(task.description)}
          </div>
        ` : ""}

        <div class="task-actions">
          <button class="action-button" data-action="toggle" data-id="${task.id}">
            ${task.completed ? "Batalkan Selesai" : "Tandai Selesai"}
          </button>

          <button class="action-button edit-button" data-action="edit" data-id="${task.id}">
            Edit
          </button>

          <button class="action-button delete-button" data-action="delete" data-id="${task.id}">
            Hapus
          </button>
        </div>
      </article>
    `).join("");
  }

  updateStats();
}

// Mengamankan teks sebelum ditampilkan sebagai HTML
function escapeHTML(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

// Mengambil elemen form
const taskForm = document.querySelector<HTMLFormElement>("#task-form")!;
let editingTaskId: number | null = null;

taskForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const title = document.querySelector<HTMLInputElement>("#title")!.value.trim();
  const subject = document.querySelector<HTMLInputElement>("#subject")!.value.trim();
  const description = document.querySelector<HTMLTextAreaElement>("#description")!.value.trim();
  const deadline = document.querySelector<HTMLInputElement>("#deadline")!.value;
  const priority = document.querySelector<HTMLSelectElement>("#priority")!.value as Task["priority"];

  if (title.length < 3) {
    alert("Nama tugas minimal 3 karakter!");
    return;
  }

  if (!subject || !deadline) {
    alert("Mata kuliah dan deadline wajib diisi!");
    return;
  }

  if (editingTaskId !== null) {
    const index = tasks.findIndex((task) => task.id === editingTaskId);

    if (index !== -1) {
      tasks[index] = {
        ...tasks[index],
        title,
        subject,
        description,
        deadline,
        priority,
      };
    }

    editingTaskId = null;
    alert("Tugas berhasil diperbarui!");
  } else {
    const newTask: Task = {
      id: Date.now(),
      title,
      subject,
      description,
      deadline,
      priority,
      completed: false,
    };

    tasks.push(newTask);
    alert("Tugas berhasil ditambahkan!");
  }

  saveTasks();
  renderTasks();
  taskForm.reset();

  document.querySelector("#form-title")!.textContent = "Tambah Tugas Baru";
  document.querySelector("#submit-button")!.textContent = "Tambah Tugas";
  document.querySelector<HTMLButtonElement>("#cancel-edit")!.hidden = true;
});

// Pencarian dan filter
document.querySelector<HTMLInputElement>("#search")!.addEventListener("input", renderTasks);
document.querySelector<HTMLSelectElement>("#filter")!.addEventListener("change", renderTasks);

// Tampilkan data saat halaman dibuka
renderTasks();

// Fungsi edit tugas
document.querySelector<HTMLDivElement>("#task-list")!.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("button");

  if (!button || button.dataset.action !== "edit") return;

  const id = Number(button.dataset.id);
  const task = tasks.find((item) => item.id === id);

  if (!task) return;

  editingTaskId = task.id;

  document.querySelector<HTMLInputElement>("#title")!.value = task.title;
  document.querySelector<HTMLInputElement>("#subject")!.value = task.subject;
  document.querySelector<HTMLTextAreaElement>("#description")!.value = task.description;
  document.querySelector<HTMLInputElement>("#deadline")!.value = task.deadline;
  document.querySelector<HTMLSelectElement>("#priority")!.value = task.priority;

  document.querySelector("#form-title")!.textContent = "Edit Tugas";
  document.querySelector("#submit-button")!.textContent = "Simpan Perubahan";
  document.querySelector<HTMLButtonElement>("#cancel-edit")!.hidden = false;

  document.querySelector("#form-panel")!.scrollIntoView({ behavior: "smooth" });
});

// Fungsi hapus dan ubah status tugas
document.querySelector<HTMLDivElement>("#task-list")!.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("button");

  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "delete") {
    const yakin = confirm("Yakin ingin menghapus tugas ini?");

    if (!yakin) return;

    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
  }

  if (action === "toggle") {
    tasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    saveTasks();
    renderTasks();
  }
});

// Membatalkan proses edit
document.querySelector<HTMLButtonElement>("#cancel-edit")!.addEventListener("click", () => {
  editingTaskId = null;

  taskForm.reset();

  document.querySelector("#form-title")!.textContent = "Tambah Tugas Baru";
  document.querySelector("#submit-button")!.textContent = "Tambah Tugas";
  document.querySelector<HTMLButtonElement>("#cancel-edit")!.hidden = true;
});
