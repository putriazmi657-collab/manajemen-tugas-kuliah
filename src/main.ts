
import './style.css'

// ==========================================
// 1. PRIMITIVE TYPES DAN ENVIRONMENT VARIABLES
// ==========================================

const appName: string = import.meta.env.VITE_APP_NAME || 'Manajemen Tugas Kuliah'
const appVersion: string = import.meta.env.VITE_APP_VERSION || '1.0.0'
const storageKey: string = 'manajemen-tugas-kuliah'

// ==========================================
// 2. TYPE ALIAS DAN UNION TYPE
// ==========================================

type TaskStatus = 'Belum Selesai' | 'Selesai'
type TaskCategory = 'Tugas' | 'Praktikum' | 'Proyek' | 'Ujian'
type FilterStatus = 'Semua' | TaskStatus

// ==========================================
// 3. INTERFACE
// ==========================================

interface Task {
  id: number
  title: string
  course: string
  deadline: string
  category: TaskCategory
  status: TaskStatus
}

// ==========================================
// 4. ARRAY
// ==========================================

const initialTasks: Task[] = []

// ==========================================
// 5. GENERICS
// ==========================================

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const savedData: string | null = localStorage.getItem(key)
    return savedData ? (JSON.parse(savedData) as T) : fallback
  } catch {
    return fallback
  }
}

function saveToStorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data))
}

// ==========================================
// DATA APLIKASI
// ==========================================

let tasks: Task[] = loadFromStorage<Task[]>(storageKey, initialTasks)
let editingId: number | null = null
let activeFilter: FilterStatus = 'Semua'
let searchKeyword: string = ''

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Elemen aplikasi tidak ditemukan')
}

// ==========================================
// MENGAMANKAN TEKS HTML
// ==========================================

function escapeHTML(value: string): string {
  return value.replace(/[&<>"']/g, (character: string) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }

    return entities[character]
  })
}

// ==========================================
// FORMAT TANGGAL
// ==========================================

function formatDate(date: string): string {
  if (!date) return '-'

  return new Date(`${date}T00:00:00`).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ==========================================
// MENAMPILKAN APLIKASI
// ==========================================

function renderApp(): void {
  const totalTasks: number = tasks.length

  const completedTasks: number = tasks.filter(
    (task: Task) => task.status === 'Selesai',
  ).length

  const pendingTasks: number = totalTasks - completedTasks

  const filteredTasks: Task[] = tasks.filter((task: Task) => {
    const matchesStatus: boolean =
      activeFilter === 'Semua' || task.status === activeFilter

    const matchesSearch: boolean =
      task.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      task.course.toLowerCase().includes(searchKeyword.toLowerCase())

    return matchesStatus && matchesSearch
  })

  const editingTask: Task | undefined = tasks.find(
    (task: Task) => task.id === editingId,
  )

  app.innerHTML = `
    <main class="container">

      <header class="header">
        <div class="brand">
          <div class="brand-icon">✿</div>
          <div>
            <h1>${escapeHTML(appName)}</h1>
            <p>Kelola tugas kuliahmu dengan lebih mudah.</p>
          </div>
        </div>
        <span class="version">v${escapeHTML(appVersion)}</span>
      </header>

      <section class="welcome">
        <p class="eyebrow">STUDENT TASK MANAGER</p>
        <h2>Halo, Mahasiswa! 👋</h2>
        <p>Jangan lupa selesaikan tugas-tugas kuliahmu, ya.</p>
      </section>

      <section class="statistics">

        <article class="stat-card">
          <span class="stat-icon">📚</span>
          <div>
            <p>Total Tugas</p>
            <h3>${totalTasks}</h3>
          </div>
        </article>

        <article class="stat-card">
          <span class="stat-icon">⏳</span>
          <div>
            <p>Belum Selesai</p>
            <h3>${pendingTasks}</h3>
          </div>
        </article>

        <article class="stat-card">
          <span class="stat-icon">✓</span>
          <div>
            <p>Sudah Selesai</p>
            <h3>${completedTasks}</h3>
          </div>
        </article>

      </section>

      <section class="content-grid">

        <section class="form-card">

          <div class="section-heading">
            <div>
              <p class="eyebrow">TASK FORM</p>
              <h2>${editingTask ? 'Edit Tugas' : 'Tambah Tugas Baru'}</h2>
            </div>
            <span class="heading-icon">✎</span>
          </div>

          <form id="task-form">

            <label for="title">Nama Tugas</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Contoh: Membuat laporan praktikum"
              value="${editingTask ? escapeHTML(editingTask.title) : ''}"
              required
            />

            <label for="course">Mata Kuliah</label>
            <input
              id="course"
              name="course"
              type="text"
              placeholder="Contoh: Pengembangan Aplikasi Web"
              value="${editingTask ? escapeHTML(editingTask.course) : ''}"
              required
            />

            <label for="category">Kategori</label>
            <select id="category" name="category">
              <option value="Tugas" ${editingTask?.category === 'Tugas' ? 'selected' : ''}>Tugas</option>
              <option value="Praktikum" ${editingTask?.category === 'Praktikum' ? 'selected' : ''}>Praktikum</option>
              <option value="Proyek" ${editingTask?.category === 'Proyek' ? 'selected' : ''}>Proyek</option>
              <option value="Ujian" ${editingTask?.category === 'Ujian' ? 'selected' : ''}>Ujian</option>
            </select>

            <label for="deadline">Deadline</label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              value="${editingTask ? escapeHTML(editingTask.deadline) : ''}"
              required
            />

            <div class="form-actions">
              <button class="primary-button" type="submit">
                ${editingTask ? 'Simpan Perubahan' : '+ Tambahkan Tugas'}
              </button>

              ${editingTask ? '<button class="cancel-button" type="button" data-action="cancel">Batal</button>' : ''}
            </div>

          </form>

        </section>

        <section class="list-card">

          <div class="section-heading">
            <div>
              <p class="eyebrow">YOUR ACTIVITIES</p>
              <h2>Daftar Tugas Kuliah</h2>
            </div>
            <span class="heading-icon">♡</span>
          </div>

          <input
            class="search-input"
            id="search"
            type="search"
            placeholder="Cari nama tugas atau mata kuliah..."
            value="${escapeHTML(searchKeyword)}"
          />

          <div class="filter-buttons">
            ${(['Semua', 'Belum Selesai', 'Selesai'] as FilterStatus[])
              .map(
                (filter: FilterStatus) => `
                  <button
                    type="button"
                    class="filter-button ${activeFilter === filter ? 'active' : ''}"
                    data-filter="${filter}"
                  >${filter}</button>
                `,
              )
              .join('')}
          </div>

          <div class="task-list">

            ${
              filteredTasks.length === 0
                ? `
                  <div class="empty-state">
                    <span>🌷</span>
                    <h3>Belum ada tugas</h3>
                    <p>Tambahkan tugas kuliahmu melalui formulir.</p>
                  </div>
                `
                : filteredTasks
                    .map(
                      (task: Task) => `
                        <article class="task-item ${task.status === 'Selesai' ? 'completed' : ''}">

                          <div class="task-top">
                            <span class="category">${escapeHTML(task.category)}</span>

                            <span class="status ${task.status === 'Selesai' ? 'done' : 'pending'}">
                              ${task.status}
                            </span>
                          </div>

                          <h3>${escapeHTML(task.title)}</h3>

                          <p class="course-name">
                            📖 ${escapeHTML(task.course)}
                          </p>

                          <p class="deadline">
                            📅 ${formatDate(task.deadline)}
                          </p>

                          <div class="task-actions">

                            <button type="button" data-action="toggle" data-id="${task.id}">
                              ${task.status === 'Selesai' ? '↩ Kembalikan' : '✓ Selesaikan'}
                            </button>

                            <button type="button" data-action="edit" data-id="${task.id}">
                              ✎ Edit
                            </button>

                            <button type="button" class="delete-button" data-action="delete" data-id="${task.id}">
                              Hapus
                            </button>

                          </div>
                        </article>
                      `,
                    )
                    .join('')
            }

          </div>

        </section>

      </section>

      <footer>
        <p>Made with ♡ for your college life</p>
        <p>Manajemen Tugas Kuliah · Version ${escapeHTML(appVersion)}</p>
      </footer>

    </main>
  `
}

// ==========================================
// UPDATE DAN SIMPAN DATA
// ==========================================

function updateApp(): void {
  saveToStorage<Task[]>(storageKey, tasks)
  renderApp()
}

// ==========================================
// TAMBAH DAN EDIT TUGAS
// ==========================================

app.addEventListener('submit', (event: SubmitEvent) => {
  const target = event.target

  if (!(target instanceof HTMLFormElement) || target.id !== 'task-form') {
    return
  }

  event.preventDefault()

  const formData = new FormData(target)

  const title = String(formData.get('title') || '').trim()
  const course = String(formData.get('course') || '').trim()
  const categoryValue = String(formData.get('category') || 'Tugas')
  const deadline = String(formData.get('deadline') || '')

  const validCategories: TaskCategory[] = [
    'Tugas',
    'Praktikum',
    'Proyek',
    'Ujian',
  ]

  if (!title || !course || !deadline) {
    alert('Mohon lengkapi semua data tugas.')
    return
  }

  if (!validCategories.includes(categoryValue as TaskCategory)) {
    alert('Kategori tugas tidak valid.')
    return
  }

  const category = categoryValue as TaskCategory

  if (editingId !== null) {

    tasks = tasks.map((task: Task) =>
      task.id === editingId
        ? { ...task, title, course, category, deadline }
        : task,
    )

    editingId = null

  } else {

    const newTask: Task = {
      id: Date.now(),
      title,
      course,
      category,
      deadline,
      status: 'Belum Selesai',
    }

    tasks.push(newTask)
  }

  updateApp()
})

// ==========================================
// EDIT, HAPUS, STATUS, DAN FILTER
// ==========================================

app.addEventListener('click', (event: MouseEvent) => {
  const target = event.target

  if (!(target instanceof HTMLElement)) return

  const filterButton = target.closest<HTMLButtonElement>('[data-filter]')

  if (filterButton) {
    activeFilter = filterButton.dataset.filter as FilterStatus
    renderApp()
    return
  }

  const button = target.closest<HTMLButtonElement>('[data-action]')

  if (!button) return

  const action = button.dataset.action
  const id = Number(button.dataset.id)

  if (action === 'cancel') {
    editingId = null
    renderApp()
    return
  }

  if (action === 'edit') {
    editingId = id
    renderApp()
    return
  }

  if (action === 'delete') {

    const confirmed = confirm(
      'Apakah kamu yakin ingin menghapus tugas ini?',
    )

    if (confirmed) {
      tasks = tasks.filter((task: Task) => task.id !== id)
      updateApp()
    }

    return
  }

  if (action === 'toggle') {

    tasks = tasks.map((task: Task) =>
      task.id === id
        ? {
            ...task,
            status:
              task.status === 'Selesai'
                ? 'Belum Selesai'
                : 'Selesai',
          }
        : task,
    )

    updateApp()
  }
})

// ==========================================
// FITUR PENCARIAN
// ==========================================

app.addEventListener('input', (event: Event) => {
  const target = event.target

  if (target instanceof HTMLInputElement && target.id === 'search') {

    searchKeyword = target.value

    renderApp()

    const searchInput = document.querySelector<HTMLInputElement>('#search')

    searchInput?.focus()

    searchInput?.setSelectionRange(
      searchKeyword.length,
      searchKeyword.length,
    )
  }
})

// ==========================================
// MENJALANKAN APLIKASI
// ==========================================

renderApp()
