<template>
  <div class="min-h-screen hpad-20">
    <div class="max-w-7xl mx-auto">
      <TopBar :copy="copy" :statusPill="statusPill" />

      <header class="mb-8">
        <h1 class="heading-large font-playfair">{{ copy.h1 }}</h1>
        <div class="mt-4 max-w-3xl flex items-center gap-3">
          <div class="flex-1 h-px bg-gradient-to-r from-teal-800 to-transparent"></div>
          <p class="text-sm text-teal-900 font-semibold tracking-wide">{{ copy.sub }}</p>
        </div>
      </header>

      <div class="grid gap-6 md:grid-cols-[1.15fr_.85fr]">
        <!-- MAIN -->
        <section class="invitation-card shadow-xl overflow-hidden">
          <div class="flex items-start justify-between px-7 py-6" style="background: linear-gradient(180deg, rgba(25,128,140,.04), transparent); border-bottom:1px solid rgba(25,128,140,.12)">
            <div>
              <div class="font-extrabold text-lg font-playfair text-teal-900">{{ copy.docTitle }}</div>
              <div class="text-sm text-teal-800 mt-1">{{ copy.docDesc }}</div>
            </div>
            <div class="font-mono text-xs bg-white border border-teal-300 rounded-full px-4 py-1.5 text-teal-900 font-bold tracking-wider">ID I-RC-2026</div>
          </div>

          <div class="p-5">
            <div class="flex gap-2 mb-4">
              <button :class="['px-4 py-2.5 rounded-lg font-bold text-sm border transition-all', lang === 'es' ? 'bg-gradient-to-br from-teal-700 to-teal-800 border-teal-900 text-white shadow-md' : 'bg-white border-teal-200 text-teal-900 hover:bg-teal-50']"
              @click="setLang('es')">Español</button>
              <button :class="['px-4 py-2.5 rounded-lg font-bold text-sm border transition-all', lang === 'en' ? 'bg-gradient-to-br from-teal-700 to-teal-800 border-teal-900 text-white shadow-md' : 'bg-white border-teal-200 text-teal-900 hover:bg-teal-50']"
              @click="setLang('en')">English</button>
            </div>

            <!-- Couple -->
            <div class="bg-white/60 rounded-2xl p-5 border border-teal-200 mb-5 shadow-sm">
              <h3 class="text-xs font-mono uppercase mb-3 text-teal-900 font-extrabold tracking-widest">{{ copy.coupleTitle }}</h3>
              <div class="flex gap-6 flex-wrap">
                <div class="flex-1 min-w-[160px]">
                  <label class="text-xs text-teal-700 font-bold uppercase tracking-wide">{{ copy.brideLabel }}</label>
                  <div class="font-bold text-teal-900 text-lg mt-2 font-playfair">Paula Puentes</div>
                  <div class="text-xs text-teal-700 mt-1">{{ copy.brideNat }}</div>
                </div>
                <div class="flex-1 min-w-[160px]">
                  <label class="text-xs text-teal-700 font-bold uppercase tracking-wide">{{ copy.groomLabel }}</label>
                  <div class="font-bold text-teal-900 text-lg mt-2 font-playfair">Dakota Wendel</div>
                  <div class="text-xs text-teal-700 mt-1">{{ copy.groomNat }}</div>
                </div>
              </div>
              <div class="text-xs text-teal-600 mt-4 italic border-t border-teal-100 pt-3">{{ copy.coupleHint }}</div>
            </div>

            <!-- Itinerary -->
            <div class="bg-white/60 rounded-2xl p-5 border border-teal-200 mb-5 shadow-sm">
              <h3 class="text-xs font-mono uppercase text-teal-900 font-extrabold tracking-widest">{{ copy.itTitle }}</h3>
              <div class="mt-4 grid gap-3">
                <div class="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-300/60">
                  <div class="inline-flex items-center gap-2 text-xs font-mono mb-3"><span class="w-2 h-2 rounded-full bg-amber-500"></span> <span class="text-teal-900 font-extrabold uppercase">{{ copy.stop1Badge }}</span></div>
                  <div class="font-bold text-teal-900 text-base">{{ config.civil_place }}</div>
                  <div class="text-sm text-teal-700 mt-2">📅 {{ config.civil_date }} · 🕐 {{ config.civil_time }}</div>
                  <div class="mt-3">
                    <a :href="config.civil_maps" target="_blank" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-teal-300 text-sm text-teal-900 font-bold hover:shadow-md transition">🗺️ Maps</a>
                  </div>

                </div>

                <div class="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-300/60">
                  <div class="inline-flex items-center gap-2 text-xs font-mono mb-3"><span class="w-2 h-2 rounded-full bg-amber-500"></span> <span class="text-teal-900 font-extrabold uppercase">{{ copy.stop2Badge }}</span></div>
                  <div class="font-bold text-teal-900 text-base">{{ config.post_place }}</div>
                  <div class="text-sm text-teal-700 mt-2">📅 {{ config.post_date }} · 🕐 {{ config.post_time }}</div>
                  <div class="mt-3">
                    <a :href="config.post_maps" target="_blank" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-teal-300 text-sm text-teal-900 font-bold hover:shadow-md transition">🗺️ Maps</a>
                  </div>
                </div>
              </div>
              <div class="text-xs text-teal-600 mt-4 italic border-t border-teal-100 pt-3">{{ copy.itHint }}</div>
            </div>

            <!-- Form -->
            <div class="bg-white/60 rounded-2xl p-5 border border-teal-200 shadow-sm">
              <h3 class="text-xs font-mono uppercase mb-4 text-teal-900 font-extrabold tracking-widest">{{ copy.formTitle }}</h3>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="text-xs text-teal-700 font-bold uppercase tracking-wide">{{ copy.nameLabel }}</label>
                  <input v-model="firstName" class="mt-2 w-full input-elem outline-none" placeholder="Ej: Juan / John">
                </div>
                <div>
                  <label class="text-xs text-teal-700 font-bold uppercase tracking-wide">{{ copy.lastLabel }}</label>
                  <input v-model="lastName" class="mt-2 w-full input-elem outline-none" placeholder="Ej: Pérez / Smith">
                </div>
              </div>

              <div class="mt-4">
                <label class="text-xs text-teal-700 font-bold uppercase tracking-wide">Email</label>
                <input v-model="email" type="email" class="mt-2 w-full input-elem outline-none" placeholder="tu@email.com">
              </div>

              <!-- Phone fields removed; Email remains optional -->

              <div class="mt-4">
                <label class="text-xs text-teal-700 font-bold uppercase tracking-wide">{{ copy.attLabel }}</label>
                <select v-model="attendance" class="mt-2 w-full input-elem">
                  <option value="both">✅ Asisto a ambos tramos (civil + post)</option>
                  <option value="civil">✅ Solo Registro Civil</option>
                  <option value="post">✅ Solo Post Registro Civil</option>
                  <option value="no">❌ No puedo asistir (apoyo moral a distancia)</option>
                </select>
                <div class="text-xs text-teal-600 mt-2 italic">{{ copy.attHint }}</div>
                <div v-if="err" class="text-sm text-rose-600 mt-2 font-bold">{{ copy.err }}</div>
              </div>

              <div class="mt-5 flex flex-wrap gap-3">
                <button @click="issue" class="btn-primary">🛂 {{ copy.issueBtn }}</button>
                <button @click="deny" class="btn-ghost">🚫 {{ copy.denyBtn }}</button>
              </div>

              <div class="mt-5 bg-gradient-to-br from-teal-50 to-cyan-50 border border-dashed border-teal-300 rounded-2xl p-5 relative">
                <div class="flex items-center justify-between mb-3">
                  <b class="font-mono text-teal-900 text-sm font-extrabold">{{ copy.permitTitle }}</b>
                  <span class="text-xs text-teal-700 font-mono">CODE: ENTRY-RC-PAU-DAK</span>
                </div>
                <pre class="font-mono text-sm text-teal-800 whitespace-pre-wrap">{{ mrz }}</pre>
                <div :class="['absolute right-4 top-14 px-3 py-2 rounded-xl font-mono text-xs border', stampShown ? 'stamp-mark show stamp-large border-emerald-300 text-emerald-300 bg-black/40' : 'stamp-mark stamp-large border-emerald-300 text-emerald-300 bg-black/20']">{{ copy.stamp }}</div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- SIDE -->
        <aside>
          <div class="bg-white/60 border border-teal-200 rounded-2xl p-5 mb-5 shadow-sm">
            <h3 class="text-xs font-mono uppercase text-teal-900 font-extrabold tracking-widest">{{ copy.sideTitle }}</h3>
            <ul class="mt-4 space-y-3 text-sm text-teal-800">
              <li v-html="copy.r1"></li>
              <li v-html="copy.r2"></li>
              <li v-html="copy.r3"></li>
              <li v-html="copy.r4"></li>
            </ul>
            <div class="border-t border-teal-100 mt-4 pt-4 text-sm text-teal-700 font-medium">{{ copy.sideNote }}</div>
          </div>

          <div class="bg-white/60 border border-teal-200 rounded-2xl p-5 shadow-sm">
            <h3 class="text-xs font-mono uppercase text-teal-900 font-extrabold tracking-widest">{{ copy.faqTitle }}</h3>
            <ul class="mt-4 space-y-3 text-sm text-teal-800">
              <li v-html="copy.f1"></li>
              <li v-html="copy.f2"></li>
              <li v-html="copy.f3"></li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- Quick guests panel (debug) -->
      <GuestsPanel :guests="guests" :loadingGuests="loadingGuests" @load="loadGuests" />

      <footer class="mt-8 text-center text-sm text-teal-700 font-medium">{{ copy.foot }}</footer>

      <div v-if="toastMsg" class="toast-fixed text-sm">{{ toastMsg }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { saveGuest, fetchGuests } from '../lib/supabase'
import TopBar from '../components/TopBar.vue'
import GuestsPanel from '../components/GuestsPanel.vue'

// Inicializar EmailJS (public key proporcionada)
emailjs.init('unNeA4QjggAdXcuek')

const config = {
  civil_place: 'Registro Civil — [DIRECCIÓN]',
  civil_date: '[FECHA CIVIL]',
  civil_time: '[HORA CIVIL]',
  civil_maps: 'https://maps.google.com/?q=[DIRECCIÓN CIVIL]',
  post_place: 'Post — [DIRECCIÓN / LUGAR]',
  post_date: '[FECHA POST]',
  post_time: '[HORA POST]',
  post_maps: 'https://maps.google.com/?q=[DIRECCIÓN POST]',
  whatsappNumber: '54911XXXXXXXXXX'
}

const COPY = {
  es: {
    topBrand: 'Control Migratorio', topStatusPending: 'Estado del trámite: ', statusPending: 'Pendiente de validación', statusApproved: 'Entrada autorizada',
    h1: 'Ingreso autorizado para: Registro Civil + Post', sub: 'Se convoca a testigos civiles...',
    docTitle: 'Formulario de Ingreso — Civil Edition', docDesc: 'Complete su identidad para obtener el permiso de entrada (con sello oficial).',
    coupleTitle: 'Dossier de las partes', brideLabel: 'Novia / Applicant A', groomLabel: 'Novio / Applicant B', brideNat: 'Nacionalidad: Argentina 🇦🇷', groomNat: 'Nacionalidad: Estadounidense 🇺🇸', coupleHint: 'Observación: el intercambio cultural es sostenido y no reversible. Se recomienda presencia.',
    itTitle: 'Itinerario de ingreso (2 tramos)', stop1Badge: 'Puesto 1 — Registro Civil', stop2Badge: 'Puesto 2 — Post Registro Civil', itHint: 'Nota: se permite ingreso a uno o ambos tramos. Su confirmación ayuda a logística (y a la paz mundial).',
    issueBtn: '🛂 Emitir permiso de entrada', waBtn: '✅ Confirmar por WhatsApp', denyBtn: '🚫 Denegar ingreso', formHint: 'Humor inteligente promise: “Denegar ingreso” no funciona.', permitTitle: 'PERMISO DE ENTRADA — CIVIL & POST', stamp: 'APROBADO ✅\nENTRADA AUTORIZADA\nSIN REEMBOLSO', err: 'Complete nombre y apellido para emitir el permiso.',
    faqTitle: 'FAQ', f1: '<b>¿Tengo que ir a los dos?</b> No. Vos elegís.', f2: '<b>¿Puedo confirmar por WhatsApp?</b> Sí, y queda asentado en acta.', f3: '<b>¿Puedo tocar “denegar”?</b> Podés, pero no te sirve de nada 😄', foot: 'Hecho con amor, burocracia falsa y un trámite real. ✨',
    entryIntent: v => ({ both: 'ASISTO A CIVIL + POST', civil: 'ASISTO SOLO A CIVIL', post: 'ASISTO SOLO A POST', no: 'NO PUEDO ASISTIR (APOYO MORAL)'}[v] || '—'),
    waMessage: (fn, ln, att) => `Hola! Soy ${fn} ${ln}.\nConfirmo mi ingreso (asistencia): ${att}.\n—\nPuesto 1 (Civil): ${config.civil_place} — ${config.civil_date} ${config.civil_time}\nPuesto 2 (Post): ${config.post_place} — ${config.post_date} ${config.post_time}`
  },
  en: {
    topBrand: 'Border Control', topStatusPending: 'Case status: ', statusPending: 'Pending validation', statusApproved: 'Entry authorized',
    h1: 'Entry clearance for: Civil Registry + After', sub: 'You are invited to witness the official signing...',
    docTitle: 'Entry Form — Civil Edition', docDesc: 'Provide your identity to receive the entry permit (with an official stamp).',
    coupleTitle: 'Applicant dossier', brideLabel: 'Bride / Applicant A', groomLabel: 'Groom / Applicant B', brideNat: 'Nationality: Argentinian 🇦🇷', groomNat: 'Nationality: American 🇺🇸', coupleHint: 'Observation: the cultural exchange is sustained and non-reversible. Attendance is strongly encouraged.',
    itTitle: 'Entry route (2 checkpoints)', stop1Badge: 'Checkpoint 1 — Civil Registry', stop2Badge: 'Checkpoint 2 — After Civil Registry', itHint: 'Note: entry is allowed to one or both checkpoints. Your confirmation helps logistics (and world peace).',
    formTitle: 'Visitor details (you)', nameLabel: 'First name', lastLabel: 'Last name', attLabel: 'Entry declaration (attendance)', attHint: 'Border translation: select the checkpoint(s) you plan to enter.',
    issueBtn: '🛂 Issue entry permit', waBtn: '✅ Confirm via WhatsApp', denyBtn: '🚫 Deny entry', formHint: 'Smart humor promise: “Deny entry” doesn’t work.', permitTitle: 'ENTRY PERMIT — CIVIL & AFTER', stamp: 'APPROVED ✅\nENTRY AUTHORIZED\nNO REFUNDS', err: 'Please enter first and last name to issue the permit.',
    sideTitle: 'Border rules (chill)', r1: '<b>Valid document:</b> a smile + celebration mode.', r2: '<b>Official language:</b> Spanglish, with Argentinian accent.', r3: '<b>Dress code:</b> chill (but photo-friendly).', r4: '<b>Neutral zone:</b> mate vs coffee / asado vs barbecue.', sideNote: 'Final resolution: we consume both. (Diplomacy + hunger.)',
    faqTitle: 'FAQ', f1: '<b>Do I have to attend both?</b> No. Your choice.', f2: '<b>Can I confirm via WhatsApp?</b> Yes, and it will be recorded officially (emotionally).', f3: '<b>Can I press “deny”?</b> You can. It just won’t help 😄', foot: 'Made with love, fake bureaucracy, and a real legal step. ✨',
    entryIntent: v => ({ both: 'ATTENDING CIVIL + AFTER', civil: 'ATTENDING CIVIL ONLY', post: 'ATTENDING AFTER ONLY', no: 'NOT ATTENDING (MORAL SUPPORT)'}[v] || '—'),
    waMessage: (fn, ln, att) => `Hi! This is ${fn} ${ln}.\nI confirm my entry (attendance): ${att}.\n—\nCheckpoint 1 (Civil): ${config.civil_place} — ${config.civil_date} ${config.civil_time}\nCheckpoint 2 (After): ${config.post_place} — ${config.post_date} ${config.post_time}`
  }
}

const lang = ref('es')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const attendance = ref('both')
const stampShown = ref(false)
const toastMsg = ref('')
const err = ref(false)
const approved = ref(false)

const copy = computed(() => COPY[lang.value])
const guests = ref([])
const loadingGuests = ref(false)

function enc(s){ return encodeURIComponent(s).replace(/[!'()*]/g, c=>'%' + c.charCodeAt(0).toString(16).toUpperCase()) }

const mrz = computed(() => {
  const fn = (firstName.value||'').trim();
  const ln = (lastName.value||'').trim();
  const intent = copy.value.entryIntent(attendance.value)
  return `VISITOR: ${fn && ln ? (fn + ' ' + ln) : '——'}\nENTRY INTENT: ${intent}\nROUTE:\n  1) CIVIL — ${config.civil_place} — ${config.civil_date} ${config.civil_time}\n  2) AFTER — ${config.post_place} — ${config.post_date} ${config.post_time}\nSTATUS: ${stampShown.value ? 'STAMPED / SEALED' : 'PENDING STAMP'}`
})

// WhatsApp code removed - keeping EmailJS only (optional)

function setLang(l){ lang.value = l }

function showToast(t){ toastMsg.value = t; clearTimeout(window.__t); window.__t = setTimeout(()=> toastMsg.value = '', 2600) }

function validate(){ 
  const ok = firstName.value.trim().length>1 && lastName.value.trim().length>1
  err.value = !ok
  return ok 
}

async function issue() {
  if(!validate()) {
    showToast(copy.value.err)
    return
  }

  // Guardar en Supabase (email optional)
  const result = await saveGuest(firstName.value, lastName.value, email.value, attendance.value)

  if (!result.success) {
    console.error('Supabase insert error:', result.error)
    showToast(lang.value === 'es' ? `Error al guardar: ${result.error}` : `Save error: ${result.error}`)
    return
  }

  // No phone handling — proceed

  // Enviar confirmaciones opcionales
  // 1) EmailJS sólo si el usuario dejó email
  let sentEmail = false
  if (email.value && email.value.includes('@')) {
    const templateParams = {
      to_email: email.value,
      to_name: firstName.value,
      guest_name: `${firstName.value} ${lastName.value}`,
      attendance_text: copy.value.entryIntent(attendance.value),
      subject: lang.value === 'es' ? '✅ Datos guardados - Invitación Civil' : '✅ Data saved - Civil Invitation',
      reply_to: email.value,
      from_name: 'Paula & Dakota'
    }

    try {
      const emailRes = await emailjs.send(
        'service_wa6gnc2',
        'template_zel8d9l',
        templateParams
      )
      console.log('EmailJS send result:', emailRes)
      sentEmail = true
    } catch (error) {
      console.error('Error al enviar email:', error)
    }
  }

  // Animación de sello
  stampShown.value = false
  setTimeout(() => {
    stampShown.value = true
    approved.value = true
    // Mensaje según comunicaciones enviadas
    if (sentEmail) {
      showToast(lang.value === 'es' ? '✅ Datos guardados y email enviado.' : '✅ Data saved and email sent.')
    } else {
      showToast(lang.value === 'es' ? '✅ Datos guardados.' : '✅ Data saved.')
    }
    // Limpiar formulario
    setTimeout(() => {
      firstName.value = ''
      lastName.value = ''
      email.value = ''
      attendance.value = 'both'
      stampShown.value = false
      approved.value = false
      // refresh local list
      loadGuests()
    }, 2000)
  }, 40)
}

async function loadGuests() {
  loadingGuests.value = true
  const res = await fetchGuests(8)
  loadingGuests.value = false
  if (!res.success) {
    console.error('Error fetching guests:', res.error)
    showToast(lang.value === 'es' ? `Error al leer invitados: ${res.error}` : `Read error: ${res.error}`)
    return
  }
  guests.value = res.data || []
}

function deny(){ const msgs = lang.value==='es' ? ['Solicitud recibida…','Evaluando objeción…','Resultado: DENEGADO.','Motivo: demasiado amor. Igual venís.'] : ['Request received…','Reviewing objection…','Decision: DENIED.','Reason: too much love. You\'re still coming.']; let i=0; const id = setInterval(()=>{ showToast(msgs[i]); i++; if(i>=msgs.length) clearInterval(id) }, 780) }

const statusPill = computed(()=> {
  const cls = approved.value ? 'status-ok' : ''
  const text = approved.value ? copy.value.statusApproved : copy.value.statusPending
  return `${copy.value.topStatusPending}<b class="${cls}" style="margin-left:.5rem">${text}</b>`
})

watch([firstName,lastName,attendance,lang], ()=>{})
</script>
