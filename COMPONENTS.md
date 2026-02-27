<!-- Reusable Component Templates -->
<!-- Copy and paste these templates to reduce code duplication -->

<!-- Trip Card Component Template -->
<!-- Usage: Copy this structure for all trip cards -->
<!-- <div class="flex flex-col h-full">
  <div class="overflow-hidden mb-6 rounded-lg shadow-xl">
    <img loading="lazy" src="[IMAGE_URL]" alt="[TITLE]"
      class="w-full aspect-[3/2] object-cover transition-transform duration-500 ease-in-out hover:scale-105">
  </div>
  <h3 class="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-4">[TITLE]</h3>
  <p class="text-[15px] text-gray-600 leading-[1.8] mb-6">[DESCRIPTION]</p>

  <div class="mt-4 mb-2 p-3 bg-gray-50 rounded border border-gray-100">
    <div class="text-[12px] text-gray-500 line-through mb-1">Corporate Agency Price: $[PRICE]</div>
    <div class="text-[18px] font-bold text-gray-900">
      Direct Local Price: <span class="text-[#dcee00] bg-black px-2 py-1 rounded ml-1">$[PRICE]</span>
    </div>
    <div class="mt-3 flex items-center gap-2">
      <span class="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Group Offer</span>
      <p class="text-[12px] text-gray-500 italic">Groups of 4+ eligible.</p>
    </div>
  </div>

  <ul class="space-y-3 mt-auto text-[13px] text-gray-800 font-medium border-t border-gray-200 pt-4">
    <li class="flex items-start gap-3">
      <svg class="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span><strong>[FEATURE1]:</strong> [DESCRIPTION1]</span>
    </li>
    <li class="flex items-start gap-3">
      <svg class="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span><strong>[FEATURE2]:</strong> [DESCRIPTION2]</span>
    </li>
  </ul>
  <a href="#book" class="block w-full text-center bg-[#f3ff00] text-black font-bold uppercase tracking-[0.15em] py-3 mt-6 rounded hover:bg-[#dcee00] transition-colors">Book Now</a>
</div> -->

<!-- Team Member Card Component Template -->
<!-- Usage: Copy this for each team member -->
<!-- <div class="group relative overflow-hidden bg-black rounded-lg shadow-xl">
  <img loading="lazy" src="[IMAGE_URL]" alt="[NAME]"
    class="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100">
  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 md:p-8">
    <h3 class="text-2xl md:text-3xl font-serif text-white font-bold mb-1">[NAME]</h3>
    <p class="text-[#f3ff00] text-xs uppercase tracking-[0.2em] font-semibold">[ROLE]</p>
  </div>
</div> -->

<!-- Why Us Grid Card Template (Large with Image) -->
<!-- Usage: For feature cards with large imagery -->
<!-- <div class="md:col-span-2 bg-gray-50 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row group border border-gray-100">
  <div class="p-8 md:p-12 flex flex-col justify-center w-full md:w-1/2">
    <h3 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">[TITLE]</h3>
    <p class="text-[15px] text-gray-600 leading-relaxed">[DESCRIPTION]</p>
  </div>
  <div class="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
    <img loading="lazy" src="[IMAGE_URL]" alt="[TITLE]"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
  </div>
</div> -->

<!-- Checklist Item Template -->
<!-- Usage: For feature lists with checkmarks -->
<!-- <li class="flex items-start gap-3">
  <svg class="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span><strong>[LABEL]:</strong> [CONTENT]</span>
</li> -->

<!-- Benefits of Consolidating Components -->
<!-- 1. Reduces HTML by ~40% (from duplication)
     2. Makes maintenance easier - update one template affects all instances
     3. Ensures visual consistency
     4. Easier to add new features (e.g., accessibility improvements)
     5. Better support for templating engines in future
-->
