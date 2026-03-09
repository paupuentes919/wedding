<template>
  <div class="min-h-screen">
    <section
      class="hero-tramite hpad-20"
      :style="{ '--hero-bg': `url(${heroBg})` }"
    >
      <div class="max-w-7xl mx-auto mt-3">
        <div class="flex justify-center sm:justify-end gap-2 mb-3">
          <button
            :class="[
              'px-4 py-2.5 rounded-lg font-bold text-sm border transition-all',
              lang === 'es'
                ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-950 text-white shadow-md'
                : 'bg-white border-stone-300 text-slate-800 hover:bg-stone-50',
            ]"
            @click="setLang('es')"
          >
            <span class="inline-flex items-center gap-2">
              <img
                src="/src/assets/arg.png"
                alt="Argentina"
                class="w-5 h-5 rounded-sm"
              />
              <span>Español</span>
            </span>
          </button>
          <button
            :class="[
              'px-4 py-2.5 rounded-lg font-bold text-sm border transition-all',
              lang === 'en'
                ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-950 text-white shadow-md'
                : 'bg-white border-stone-300 text-slate-800 hover:bg-stone-50',
            ]"
            @click="setLang('en')"
          >
            <span class="inline-flex items-center gap-2">
              <img
                src="/src/assets/usa.png"
                alt="United States"
                class="w-5 h-5 rounded-sm"
              />
              <span>English</span>
            </span>
          </button>
        </div>

        <TopBar :copy="copy" :statusPill="statusPill" />

        <header class="mb-8">
          <h1
            class="heading-large font-montserrat flex justify-center mb-3 mt-6"
          >
            {{ copy.h1 }}
          </h1>
          <h2 class="heading-large-lower font-montserrat flex justify-center">
            {{ copy.h2 }}
          </h2>
          <div class="mt-4 max-w-4xl flex items-center gap-3">
            <div
              class="flex-1 h-[2.5px] bg-gradient-to-r from-slate-800 to-transparent"
            ></div>
          </div>
        </header>
      </div>
    </section>

    <div class="hpad-20 mt-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-center mb-6">
          <div class="photo-wrapper relative">
            <!-- Paperclip SVG -->
            <svg
              class="paperclip-svg"
              viewBox="0 0 80 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="clip-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style="stop-color: #c0cace; stop-opacity: 1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color: #8a9299; stop-opacity: 1"
                  />
                </linearGradient>
              </defs>
              <!-- Main paperclip body -->
              <path
                d="M 25 15 Q 15 15 15 30 L 15 65 Q 15 75 25 75 Q 35 75 35 65 L 35 35 Q 35 28 42 28 Q 49 28 49 35 L 49 65 Q 49 80 37 80 Q 22 80 22 65"
                fill="none"
                stroke="url(#clip-gradient)"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- Inner shadow/depth -->
              <path
                d="M 27 17 Q 18 17 18 30 L 18 63 Q 18 72 26 72 Q 33 72 33 63 L 33 35 Q 33 30 40 30 Q 46 30 46 35 L 46 63 Q 46 77 36 77 Q 24 77 24 65"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.6"
              />
            </svg>

            <!-- Photo Box -->
            <div class="photo-box">
              <img
                :src="coupleImg"
                alt="Couple illustration"
                class="photo-img"
              />
            </div>

            <!-- Stamp Image -->
            <img :src="stampImg" alt="Stamp" class="stamp-image" />
          </div>
        </div>

        <!-- MAIN -->
        <section class="invitation-card shadow-xl overflow-hidden">
          <div
            class="flex items-start justify-between px-7 py-6"
            style="
              background: linear-gradient(
                180deg,
                rgba(45, 52, 70, 0.06),
                transparent
              );
              border-bottom: 1px solid rgba(45, 52, 70, 0.16);
            "
          >
            <div>
              <div class="font-extrabold text-lg font-playfair text-slate-900">
                {{ copy.docTitle }}
              </div>
              <div class="text-sm text-slate-700 mt-1">{{ copy.docDesc }}</div>
            </div>
            <div
              class="font-mono text-xs bg-white border border-stone-400 rounded-full px-4 py-1.5 text-slate-900 font-bold tracking-wider"
            >
              ID I-RC-2026
            </div>
          </div>

          <div class="p-5">
            <!-- Couple -->
            <div
              class="bg-white/60 rounded-2xl p-5 border border-stone-300 mb-5 shadow-sm"
            >
              <h3
                class="text-xs font-mono uppercase mb-3 text-slate-900 font-extrabold tracking-widest"
              >
                {{ copy.coupleTitle }}
              </h3>
              <div class="flex gap-6 flex-wrap">
                <div class="flex-1 min-w-[160px] flex items-start gap-3">
                  <img
                    :src="paulaform"
                    alt="Paula"
                    class="w-20 h-24 object-cover rounded-lg border border-stone-400 flex-shrink-0"
                  />
                  <div>
                    <label
                      class="text-xs text-slate-600 font-bold uppercase tracking-wide"
                      >{{ copy.brideLabel }}</label
                    >
                    <div
                      class="font-bold text-slate-900 text-lg mt-1 font-playfair"
                    >
                      Paula Puentes
                    </div>
                    <div class="text-xs text-slate-600 mt-1">
                      {{ copy.brideNat }}
                    </div>
                  </div>
                </div>
                <div class="flex-1 min-w-[160px] flex items-start gap-3">
                  <img
                    :src="dakotaform"
                    alt="Dakota"
                    class="w-20 h-24 object-cover rounded-lg border border-stone-400 flex-shrink-0"
                  />
                  <div>
                    <label
                      class="text-xs text-slate-600 font-bold uppercase tracking-wide"
                      >{{ copy.groomLabel }}</label
                    >
                    <div
                      class="font-bold text-slate-900 text-lg mt-1 font-playfair"
                    >
                      Dakota Wendel
                    </div>
                    <div class="text-xs text-slate-600 mt-1">
                      {{ copy.groomNat }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-xs text-slate-500 mt-4 italic border-t border-stone-200 pt-3"
              >
                {{ copy.coupleHint }}
              </div>
            </div>

            <!-- Itinerary -->
            <div
              class="bg-white/60 rounded-2xl p-5 border border-stone-300 mb-5 shadow-sm"
            >
              <h3
                class="text-xs font-mono uppercase text-slate-900 font-extrabold tracking-widest"
              >
                {{ copy.itTitle }}
              </h3>
              <div class="mt-4 grid gap-3">
                <div
                  class="p-4 rounded-lg bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-400/60"
                >
                  <div
                    class="inline-flex items-center gap-2 text-xs font-mono mb-3"
                  >
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span class="text-slate-900 font-extrabold uppercase">{{
                      copy.stop1Badge
                    }}</span>
                  </div>
                  <div class="font-bold text-slate-900 text-base">
                    {{ config.civil_place }}
                  </div>
                  <div class="text-sm text-slate-600 mt-2">
                    📅 {{ config.civil_date }} · 🕐 {{ config.civil_time }}
                  </div>
                  <div class="mt-3">
                    <a
                      :href="config.civil_maps"
                      target="_blank"
                      class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-stone-400 text-sm text-slate-900 font-bold hover:shadow-md transition"
                      >🗺️ Maps</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="text-xs text-slate-500 mt-4 italic border-t border-stone-200 pt-3"
              >
                {{ copy.itHint }}
              </div>
            </div>

            <!-- FAQ -->
            <div
              class="bg-white/60 border border-stone-300 rounded-2xl p-5 shadow-sm mb-5"
            >
              <h3
                class="text-xs font-mono uppercase text-slate-900 font-extrabold tracking-widest"
              >
                {{ copy.faqTitle }}
              </h3>
              <ul class="mt-4 space-y-3 text-sm text-slate-700">
                <li v-html="copy.f1"></li>
                <li v-html="copy.f2"></li>
                <li v-html="copy.f3"></li>
              </ul>
            </div>

            <div
              v-if="lang === 'es'"
              class="bg-white/60 border border-stone-300 rounded-2xl p-5 shadow-sm mb-5"
            >
              <h3
                class="text-xs font-mono uppercase text-slate-900 font-extrabold tracking-widest"
              >
                {{ copy.giftTitle }}
              </h3>
              <div class="mt-4 space-y-3 text-sm text-slate-700">
                <p>{{ copy.giftP1 }}</p>
                <p>{{ copy.giftP2 }}</p>
                <p class="font-bold text-slate-900">{{ copy.giftCbu }}</p>
                <p class="font-bold text-slate-900">{{ copy.giftHolder }}</p>
                <p class="font-bold text-slate-900">{{ copy.giftAlias }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Timeline Section -->
      <div class="invitation-card shadow-xl overflow-hidden mt-6">
        <div
          class="flex items-start justify-between px-7 py-6"
          style="
            background: linear-gradient(
              180deg,
              rgba(45, 52, 70, 0.06),
              transparent
            );
            border-bottom: 1px solid rgba(45, 52, 70, 0.16);
          "
        >
          <div>
            <div class="font-extrabold text-lg font-playfair text-slate-900">
              {{ copy.timelineTitle }}
            </div>
            <div class="text-sm text-slate-700 mt-1">
              {{ copy.timelineDesc }}
            </div>
          </div>
          <div
            class="font-mono text-xs bg-white border border-stone-400 rounded-full px-4 py-1.5 text-slate-900 font-bold tracking-wider"
          >
            ID E-TH-2022-2026
          </div>
        </div>

        <div class="p-5">
          <!-- Timeline Container -->
          <div class="timeline-wrapper">
            <!-- 2022 -->
            <div class="timeline-item">
              <div class="timeline-badge">2022</div>
              <div class="timeline-card">
                <div class="timeline-stamp">
                  📌 {{ copy.timeline2022Title }}
                </div>
                <div class="timeline-photos-grid">
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2022-1.jpg"
                      alt="2022 - 1"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2022-2.jpg"
                      alt="2022 - 2"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2022-3.jpg"
                      alt="2022 - 3"
                      class="timeline-photo"
                    />
                  </div>
                </div>
                <div class="timeline-note">{{ copy.timeline2022Text }}</div>
              </div>
            </div>

            <!-- 2023 -->
            <div class="timeline-item">
              <div class="timeline-badge">2023</div>
              <div class="timeline-card">
                <div class="timeline-stamp">
                  📌 {{ copy.timeline2023Title }}
                </div>
                <div class="timeline-photos-grid">
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2023-1.jpg"
                      alt="2023 - 1"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2023-2.jpg"
                      alt="2023 - 2"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2023-3.jpg"
                      alt="2023 - 3"
                      class="timeline-photo"
                    />
                  </div>
                </div>
                <div class="timeline-note">{{ copy.timeline2023Text }}</div>
              </div>
            </div>

            <!-- 2024 -->
            <div class="timeline-item">
              <div class="timeline-badge">2024</div>
              <div class="timeline-card">
                <div class="timeline-stamp">
                  📌 {{ copy.timeline2024Title }}
                </div>
                <div class="timeline-photos-grid">
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2024-1.jpg"
                      alt="2024 - 1"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2024-2.jpg"
                      alt="2024 - 2"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2024-3.jpg"
                      alt="2024 - 3"
                      class="timeline-photo"
                    />
                  </div>
                </div>
                <div class="timeline-note">{{ copy.timeline2024Text }}</div>
              </div>
            </div>

            <!-- 2025 -->
            <div class="timeline-item">
              <div class="timeline-badge">2025</div>
              <div class="timeline-card">
                <div class="timeline-stamp">
                  📌 {{ copy.timeline2025Title }}
                </div>
                <div class="timeline-photos-grid">
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2025-1.jpg"
                      alt="2025 - 1"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2025-2.jpg"
                      alt="2025 - 2"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2025-3.jpg"
                      alt="2025 - 3"
                      class="timeline-photo"
                    />
                  </div>
                </div>
                <div class="timeline-note">{{ copy.timeline2025Text }}</div>
              </div>
            </div>

            <!-- 2026 -->
            <div class="timeline-item">
              <div class="timeline-badge">2026</div>
              <div class="timeline-card">
                <div class="timeline-stamp">
                  📌 {{ copy.timeline2026Title }}
                </div>
                <div class="timeline-photos-grid">
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2026-1.jpg"
                      alt="2026 - 1"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2026-2.jpg"
                      alt="2026 - 2"
                      class="timeline-photo"
                    />
                  </div>
                  <div class="timeline-photo-box">
                    <img
                      src="/src/assets/timeline/2026-3.jpg"
                      alt="2026 - 3"
                      class="timeline-photo"
                    />
                  </div>
                </div>
                <div class="timeline-note">{{ copy.timeline2026Text }}</div>
              </div>
            </div>
          </div>

          <div
            class="text-xs text-slate-500 mt-5 italic border-t border-stone-200 pt-3 text-center"
          >
            {{ copy.timelineFooter }}
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="invitation-card shadow-xl overflow-hidden mt-6">
        <div
          class="flex items-start justify-between px-7 py-6"
          style="
            background: linear-gradient(
              180deg,
              rgba(45, 52, 70, 0.06),
              transparent
            );
            border-bottom: 1px solid rgba(45, 52, 70, 0.16);
          "
        >
          <div>
            <div class="font-extrabold text-lg font-playfair text-slate-900">
              {{ copy.formTitle }}
            </div>
            <div class="text-sm text-slate-700 mt-1">{{ copy.formDesc }}</div>
          </div>
          <div
            class="font-mono text-xs bg-white border border-stone-400 rounded-full px-4 py-1.5 text-slate-900 font-bold tracking-wider"
          >
            ID P-RC-2026
          </div>
        </div>

        <div class="p-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label
                class="text-xs text-slate-600 font-bold uppercase tracking-wide"
                >{{ copy.nameLabel }}</label
              >
              <input
                v-model="firstName"
                class="mt-2 w-full input-elem outline-none"
                placeholder="Ej: Juan / John"
              />
            </div>
            <div>
              <label
                class="text-xs text-slate-600 font-bold uppercase tracking-wide"
                >{{ copy.lastLabel }}</label
              >
              <input
                v-model="lastName"
                class="mt-2 w-full input-elem outline-none"
                placeholder="Ej: Pérez / Smith"
              />
            </div>
          </div>

          <div class="mt-4">
            <label
              class="text-xs text-slate-600 font-bold uppercase tracking-wide"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              class="mt-2 w-full input-elem outline-none"
              placeholder="tu@email.com"
            />
          </div>

          <div class="mt-4">
            <label
              class="text-xs text-slate-600 font-bold uppercase tracking-wide"
              >{{ copy.attLabel }}</label
            >
            <select v-model="attendance" class="mt-2 w-full input-elem">
              <option value="" disabled>{{ copy.attSelectOption }}</option>
              <option value="yes">✅ {{ copy.attCeremony }}</option>
              <option value="no">❌ {{ copy.attNo }}</option>
            </select>
            <div class="text-xs text-slate-500 mt-2 italic">
              {{ copy.attHint }}
            </div>
            <div v-if="err" class="text-sm text-rose-600 mt-2 font-bold">
              {{ copy.err }}
            </div>
          </div>

          <div
            class="mt-5 bg-gradient-to-br from-stone-50 to-amber-50 border border-dashed border-stone-400 rounded-2xl p-5 relative"
          >
            <div class="flex items-center justify-between mb-3">
              <b class="font-mono text-slate-900 text-sm font-extrabold">{{
                copy.permitTitle
              }}</b>
              <span class="text-xs text-slate-600 font-mono"
                >CODE: ENTRY-RC-PAU-DAK</span
              >
            </div>
            <pre class="font-mono text-sm text-slate-700 whitespace-pre-wrap">{{
              mrz
            }}</pre>
            <div
              :class="[
                'absolute right-4 top-14 px-3 py-2 rounded-xl font-mono text-xs border',
                stampVisualClass,
              ]"
            >
              {{ permitStampText }}
            </div>
          </div>

          <div class="mt-5 flex flex-wrap gap-3">
            <button @click="issue" class="btn-primary">
              🛂 {{ copy.issueBtn }}
            </button>
          </div>
        </div>
      </div>
      <footer class="mt-8 text-center text-sm text-slate-600 font-medium">
        {{ copy.foot }}
        <br />
        {{ copy.foot2 }}
        <br />
      </footer>
    </div>

    <div v-if="toastMsg" class="toast-fixed text-sm">{{ toastMsg }}</div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import emailjs from "@emailjs/browser";
import { saveGuest } from "../lib/supabase";
import TopBar from "../components/TopBar.vue";
import coupleImg from "../assets/paudakota.png";
import argPhoto from "../assets/argphoto.png";
import usaPhoto from "../assets/usaphoto.png";
import stampImg from "../assets/stamp.png";
import paulaform from "../assets/paulaform.png";
import dakotaform from "../assets/dakotaform.png";

// Inicializar EmailJS (public key proporcionada)
emailjs.init("unNeA4QjggAdXcuek");

const config = {
  civil_place: "Yacht Club Puerto Madero — Victoria Ocampo 100",
  civil_date: "2026-05-15",
  civil_time: "13hs",
  civil_maps: "https://maps.app.goo.gl/wbZvkKS5EvJAT1FH6",
  post_place: "Post — [DIRECCIÓN / LUGAR]",
  post_date: "[FECHA POST]",
  post_time: "[HORA POST]",
  post_maps: "https://maps.google.com/?q=[DIRECCIÓN POST]",
  whatsappNumber: "54911XXXXXXXXXX",
};

const COPY = {
  es: {
    topBrand: "Control Migratorio",
    topStatusPending: "Estado del trámite: ",
    statusPending: "Pendiente de validación",
    statusApproved: "Entrada autorizada",
    statusDenied: "Ingreso denegado",
    h1: "Autorización de entrada",
    h2: "Evento de celebración",
    docTitle: "Formulario de ingreso",
    docDesc:
      "Complete su identidad para obtener el permiso de entrada con sello oficial",
    coupleTitle: "Dossier de las partes",
    timelineTitle:
      "Historial de tránsito — Archivo central de una historia compartida",
    timelineDesc:
      "Secuencia fotográfica del momento en que el tiempo entendió que debía contarse en plural",
    timeline2022Title: "Primer Contacto",
    timeline2022Text: "Protocolo de acercamiento activado",
    timeline2023Title: "Tránsito Frecuente",
    timeline2023Text: "Cruces recurrentes registrados",
    timeline2024Title: "Encuentros reiterados",
    timeline2024Text: "Intersecciones sucesivas oficialmente registradas",
    timeline2025Title: "Preparativos Avanzados",
    timeline2025Text: "Anillo confirmado, rumbo compartido",
    timeline2026Title: "Legalización Final",
    timeline2026Text: "Acta civil autorizada y destino conjunto en ejecución",
    timelineFooter:
      "Evidencia clasificada. Acceso reservado para testigos del destino",
    brideLabel: "Novia / Applicant A",
    groomLabel: "Novio / Applicant B",
    brideNat: "Nacionalidad: Argentina",
    groomNat: "Nacionalidad: Estadounidense",
    coupleHint: "Observación: Conexión detectada. Intervención civil requerida",
    itTitle: "Itinerario de ingreso",
    stop1Badge: "Puesto — Ceremonia",
    itHint: "Su compañía será debidamente celebrada",
    formTitle: "Datos de ingreso — Participante",
    formDesc: "Complete los datos requeridos para validar su entrada al evento",
    attSelectOption: "Selecciona una opción",
    attCeremony: "Asisto a la ceremonia",
    attNo: "No puedo asistir (apoyo moral a distancia)",
    issueBtn: "🛂 Emitir permiso de entrada",
    waBtn: "✅ Confirmar por WhatsApp",
    permitTitle: "VERIFICACIÓN DE DATOS COMPLETADOS",
    stamp: "APROBADO ✅\nENTRADA AUTORIZADA\nSIN REEMBOLSO",
    err: "Complete nombre y apellido para emitir el permiso.",
    faqTitle: "FAQ",
    f1: "<b>¿Cómo debo ir vestido?</b> - Elegante",
    f2: "<b>¿Cuál es la duración del evento?</b> - El evento durarará aproximadamente 8 horas",
    f3: "<b>¿El Yacht Club incluye estacionamiento?</b> - No, no hay estacionamiento en el Yacht Club, pero el más cercano está en Victoria Ocampo 355",
    giftTitle: "Contribucion simbolica",
    giftP1:
      "De acuerdo con la normativa vigente, su presencia ha sido previamente clasificada como aporte suficiente y de alto valor afectivo",
    giftP2:
      "No obstante, conforme al Codigo de Contribuciones Simbolicas,se autoriza el ingreso con obsequio voluntario para quienes asi lo dispongan",
    giftCbu: "CBU: 00701583-30004038295770",
    giftHolder: "Titular: Paula Puentes",
    giftAlias: "Alias: pau.dakota.boda",
    foot: "Hecho con amor, burocracia falsa y muchos trámites reales ✨",
    foot2: "Cualquier similitud con la realidad es pura coincidencia 😂",
    entryIntent: (v) =>
      ({
        yes: "ASISTO A LA CEREMONIA",
        no: "NO PUEDO ASISTIR (APOYO MORAL)",
      })[v] || "—",
    waMessage: (fn, ln, att) =>
      `Hola! Soy ${fn} ${ln}.\nConfirmo mi ingreso (asistencia): ${att}.\n—\nPuesto 1 (Civil): ${config.civil_place} — ${config.civil_date} ${config.civil_time}\nPuesto 2 (Post): ${config.post_place} — ${config.post_date} ${config.post_time}`,
  },
  en: {
    topBrand: "Border Control",
    topStatusPending: "Case status: ",
    statusPending: "Pending validation",
    statusApproved: "Entry authorized",
    statusDenied: "Entry denied",
    h1: "Entry clearance",
    h2: "Celebration Event",
    docTitle: "Entry Form",
    docDesc:
      "Provide your identity to receive the entry permit with an official stamp",
    coupleTitle: "Applicant dossier",
    timelineTitle: "Transit history — Central archive of a shared story",
    timelineDesc:
      "Photographic sequence of the moment when time understood it should be counted in plural",
    timeline2022Title: "First Contact",
    timeline2022Text: "Approach protocol activated",
    timeline2023Title: "Frequent Transit",
    timeline2023Text: "Recurring crossings registered",
    timeline2024Title: "Repeated Encounters",
    timeline2024Text: "Successive intersections officially recorded",
    timeline2025Title: "Advanced Preparations",
    timeline2025Text: "Ring confirmed, shared route",
    timeline2026Title: "Final Legalization",
    timeline2026Text: "Civil act authorized and joint destination in execution",
    timelineFooter:
      "Classified evidence. Access reserved for witnesses of destiny",
    brideLabel: "Bride / Applicant A",
    groomLabel: "Groom / Applicant B",
    brideNat: "Nationality: Argentinian",
    groomNat: "Nationality: American",
    coupleHint: "Observation: Connection detected. Civil intervention required",
    itTitle: "Entry route",
    stop1Badge: "Checkpoint — Ceremony",
    itHint: "Your presence will be duly celebrated",
    formTitle: "Entry data — Participant",
    formDesc:
      "Complete the required details to validate your entry to the event",
    attSelectOption: "Select an option",
    attCeremony: "I attend the ceremony",
    attNo: "I can't attend (moral support from afar)",
    nameLabel: "First name",
    lastLabel: "Last name",
    attLabel: "Entry declaration (attendance)",
    attHint: "Border translation: select the checkpoint(s) you plan to enter.",
    issueBtn: "🛂 Issue entry permit",
    waBtn: "✅ Confirm via WhatsApp",
    denyBtn: "🚫 Deny entry",
    formHint: "Smart humor promise: “Deny entry” doesn’t work.",
    permitTitle: "VERIFICATION OF COMPLETED DATA",
    stamp: "APPROVED ✅\nENTRY AUTHORIZED\nNO REFUNDS",
    err: "Please enter first and last name to issue the permit.",
    sideTitle: "Border rules (chill)",
    r1: "<b>Valid document:</b> a smile + celebration mode.",
    r2: "<b>Official language:</b> Spanglish, with Argentinian accent.",
    r3: "<b>Dress code:</b> chill (but photo-friendly).",
    r4: "<b>Neutral zone:</b> mate vs coffee / asado vs barbecue.",
    sideNote: "Final resolution: we consume both. (Diplomacy + hunger.)",
    faqTitle: "FAQ",
    f1: "<b>How should I dress?</b> - Elegant",
    f2: "<b>How long will the ceremony last?</b> - The event will last approximately 8 hours",
    f3: "<b>Does the Yacht Club include parking?</b> - No, but closest parking lots are at Victoria Ocampo 355",
    giftTitle: "Symbolic contribution",
    giftP1:
      "Per current regulations, your presence has already been classified as a sufficient contribution of high affective value.",
    giftP2:
      "Nevertheless, under the Symbolic Contributions Code, optional clause, entry is authorized with a voluntary gift for those who wish to do so.",
    giftCbu: "CBU: 00701583-30004038295770",
    giftHolder: "Account holder: Paula Puentes",
    giftAlias: "Alias: pau.dakota.boda",
    foot: "Made with love, fake bureaucracy, and many real legal steps ✨",
    foot2: "Any resemblance to reality is purely coincidental 😂",
    entryIntent: (v) =>
      ({
        yes: "I ATTEND THE CEREMONY",
        no: "NOT ATTENDING (MORAL SUPPORT)",
      })[v] || "—",
    waMessage: (fn, ln, att) =>
      `Hi! This is ${fn} ${ln}.\nI confirm my entry (attendance): ${att}.\n—\nCheckpoint 1 (Civil): ${config.civil_place} — ${config.civil_date} ${config.civil_time}\nCheckpoint 2 (After): ${config.post_place} — ${config.post_date} ${config.post_time}`,
  },
};

const lang = ref("es");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const attendance = ref("");
const stampShown = ref(false);
const toastMsg = ref("");
const err = ref(false);
const approved = ref(false);

const copy = computed(() => COPY[lang.value]);
const heroBg = computed(() => (lang.value === "es" ? argPhoto : usaPhoto));
const guests = ref([]);
const loadingGuests = ref(false);

function enc(s) {
  return encodeURIComponent(s).replace(
    /[!'()*]/g,
    (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
  );
}

const mrz = computed(() => {
  const fn = (firstName.value || "").trim();
  const ln = (lastName.value || "").trim();
  const intent = copy.value.entryIntent(attendance.value);
  return `VISITOR: ${fn && ln ? fn + " " + ln : "——"}\nENTRY INTENT: ${intent}\nCEREMONY ROUTE: — ${config.civil_place} — ${config.civil_date} ${config.civil_time}\nSTATUS: ${stampShown.value ? "STAMPED / SEALED" : "PENDING STAMP"}`;
});

const permitStampText = computed(() => {
  if (attendance.value === "no") {
    return lang.value === "es"
      ? "RECHAZADO ❌\nAPOYO MORAL A LA DISTANCIA"
      : "DENIED ❌\nMORAL SUPPORT FROM AFAR";
  }
  return copy.value.stamp;
});

const stampVisualClass = computed(() => {
  const toneClass =
    attendance.value === "no"
      ? "border-rose-300 text-rose-300"
      : "border-emerald-300 text-emerald-300";
  const stateClass = stampShown.value
    ? "stamp-mark show stamp-large bg-black/40"
    : "stamp-mark stamp-large bg-black/20";
  return `${stateClass} ${toneClass}`;
});

// WhatsApp code removed - keeping EmailJS only (optional)

function setLang(l) {
  lang.value = l;
}

function showToast(t) {
  toastMsg.value = t;
  clearTimeout(window.__t);
  window.__t = setTimeout(() => (toastMsg.value = ""), 2600);
}

function validate() {
  const ok =
    firstName.value.trim().length > 1 && lastName.value.trim().length > 1;
  err.value = !ok;
  return ok;
}

async function issue() {
  if (!validate()) {
    showToast(copy.value.err);
    return;
  }

  // Guardar en Supabase (email optional)
  const result = await saveGuest(
    firstName.value,
    lastName.value,
    email.value,
    attendance.value,
  );

  if (!result.success) {
    console.error("Supabase insert error:", result.error);
    showToast(
      lang.value === "es"
        ? `Error al guardar: ${result.error}`
        : `Save error: ${result.error}`,
    );
    return;
  }

  // No phone handling — proceed

  // Enviar confirmaciones opcionales
  // 1) EmailJS sólo si el usuario dejó email
  let sentEmail = false;
  if (attendance.value !== "no" && email.value && email.value.includes("@")) {
    const templateParams = {
      to_email: email.value,
      to_name: firstName.value,
      guest_name: `${firstName.value} ${lastName.value}`,
      attendance_text: copy.value.entryIntent(attendance.value),
      subject: lang.value === "es" ? "✅ Datos guardados" : "✅ Data saved",
      reply_to: email.value,
      from_name: "Paula & Dakota",
    };

    try {
      const emailRes = await emailjs.send(
        "service_wa6gnc2",
        "template_zel8d9l",
        templateParams,
      );
      console.log("EmailJS send result:", emailRes);
      sentEmail = true;
    } catch (error) {
      console.error("Error al enviar email:", error);
    }
  }

  // Animación de sello
  stampShown.value = false;
  setTimeout(() => {
    stampShown.value = true;
    approved.value = true;
    // Mensaje según comunicaciones enviadas
    if (sentEmail) {
      showToast(
        lang.value === "es"
          ? "✅ Datos guardados y email enviado"
          : "✅ Data saved and email sent",
      );
    } else {
      showToast(lang.value === "es" ? "✅ Datos guardados" : "✅ Data saved");
    }
    // Limpiar formulario pero mantener approved = true
    setTimeout(() => {
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      attendance.value = "";
      stampShown.value = false;
      // NO resetear approved.value - mantener "Entrada autorizada"
      // refresh local list
    }, 2000);
  }, 40);
}

function deny() {
  const msgs =
    lang.value === "es"
      ? [
          "Solicitud recibida…",
          "Evaluando objeción…",
          "Resultado: DENEGADO.",
          "Motivo: demasiado amor. Igual venís.",
        ]
      : [
          "Request received…",
          "Reviewing objection…",
          "Decision: DENIED.",
          "Reason: too much love. You're still coming.",
        ];
  let i = 0;
  const id = setInterval(() => {
    showToast(msgs[i]);
    i++;
    if (i >= msgs.length) clearInterval(id);
  }, 780);
}

const statusPill = computed(() => {
  let dotClass = "warn-dot"; // Por defecto: pendiente
  let textClass = "status-warn";
  let text = copy.value.statusPending;

  if (attendance.value === "no") {
    // Ingreso denegado
    dotClass = "no-dot";
    textClass = "status-warn"; // o puedes crear una clase status-no
    text = copy.value.statusDenied;
  } else if (["yes"].includes(attendance.value)) {
    // Entrada autorizada
    dotClass = "seal-dot";
    textClass = "status-ok";
    text = copy.value.statusApproved;
  }

  return `<span class="${dotClass}"></span><b class="${textClass}" style="margin-left:.5rem">${copy.value.topStatusPending}${text}</b>`;
});

watch([firstName, lastName, attendance, lang], () => {});
</script>

<style scoped>
.photo-wrapper {
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
}

.photo-box {
  position: relative;
  padding: 1rem;
  background: linear-gradient(
    180deg,
    rgba(203, 169, 125, 0.9),
    rgba(179, 139, 90, 0.9)
  );
  border-radius: 0.25rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.photo-img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 6px solid #f7ead6;
  box-shadow: 0 6px 18px rgba(45, 52, 70, 0.08);
  background: #fff;
}

/* Paperclip */
.paperclip-svg {
  position: absolute;
  top: 6px;
  left: 12px;
  width: 70px;
  height: 85px;
  transform: rotate(-15deg);
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.15));
  opacity: 0.95;
  z-index: 10;
}

/* Stamp Image */
.stamp-image {
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: 120px;
  height: auto;
  transform: rotate(-15deg);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  z-index: 8;
}

/* Dual Stamps Container */
.stamps-container {
  position: absolute;
  right: 0;
  bottom: -25px;
  width: 100%;
  height: 200px;
  z-index: 5;
}

.stamp-item {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.2));
}

.stamp-love {
  right: 80px;
  bottom: 30px;
  transform: rotate(-20deg);
}

.stamp-authenticated {
  right: -10px;
  bottom: 0;
  transform: rotate(15deg);
}

.stamp-svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.stamp-text-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #000;
  text-align: center;
  pointer-events: none;
  z-index: 10;
}

.stamp-text-main {
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-shadow:
    0 2px 3px rgba(255, 255, 255, 0.7),
    0 -1px 1px rgba(0, 0, 0, 0.2);
  color: #000;
  font-style: italic;
}

.stamp-bold-text {
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
}

.stamp-small-text {
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 700;
  font-size: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 2px;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .photo-wrapper {
    max-width: 92%;
  }

  .stamp-item {
    width: 110px;
    height: 110px;
  }

  .stamp-love {
    right: 60px;
    bottom: 20px;
  }

  .stamp-authenticated {
    right: -5px;
    bottom: -5px;
  }

  .stamp-text-main {
    font-size: 11px;
    letter-spacing: 0.8px;
  }

  .stamp-bold-text {
    font-size: 13px;
    letter-spacing: 1px;
  }

  .stamp-small-text {
    font-size: 7px;
    margin-top: 1px;
  }

  .paperclip-svg {
    width: 56px;
    height: 68px;
    left: 8px;
    top: 6px;
  }

  .stamp-image {
    width: 90px;
    bottom: -10px;
    right: -15px;
  }
}

/* Timeline Styles */
.timeline-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  align-items: start;
}

.timeline-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e293b, #334155);
  border: 3px solid #cbd5e1;
  border-radius: 50%;
  font-family: "Courier New", monospace;
  font-weight: 900;
  font-size: 1.1rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow:
    0 4px 12px rgba(30, 41, 59, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.timeline-badge::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.timeline-item .timeline-badge::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  width: 3px;
  height: 80px;
  background: linear-gradient(to bottom, #cbd5e1, #e2e8f0);
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(251, 247, 242, 0.95)
  );
  border: 2px solid #d6d3d1;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow:
    0 4px 16px rgba(45, 52, 70, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 8px 24px rgba(45, 52, 70, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.timeline-stamp {
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: "Courier New", monospace;
  font-size: 0.7rem;
  font-weight: 800;
  color: #b91c1c;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.35rem 0.6rem;
  background: rgba(254, 242, 242, 0.9);
  border: 1.5px dashed #dc2626;
  border-radius: 0.35rem;
  transform: rotate(3deg);
  box-shadow: 0 2px 6px rgba(185, 28, 28, 0.15);
}

.timeline-photos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.timeline-photo-box {
  width: 100%;
  padding: 0.4rem;
  background: linear-gradient(145deg, #a8a29e, #d6d3d1);
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(68, 64, 60, 0.12);
}

.timeline-photo {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 0.35rem;
  border: 3px solid #fef3c7;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  background: #fff;
}

.timeline-note {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #475569;
  font-style: italic;
  text-align: center;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(203, 213, 225, 0.5);
}

/* Responsive Timeline */
@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 60px 1fr;
    gap: 1rem;
  }

  .timeline-badge {
    width: 60px;
    height: 60px;
    font-size: 0.9rem;
  }

  .timeline-item .timeline-badge::after {
    height: 60px;
  }

  .timeline-card {
    padding: 1rem;
  }

  .timeline-stamp {
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem;
    top: 8px;
    right: 8px;
  }

  .timeline-photos-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .timeline-photo-box {
    max-width: 100%;
  }

  .timeline-photo {
    height: 140px;
  }

  .timeline-note {
    font-size: 0.8rem;
  }
}
</style>
