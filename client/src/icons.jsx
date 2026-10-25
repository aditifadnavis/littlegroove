const icons = {
 Activity: '◌', Archive: '▣', ArrowDown: '↓', ArrowUpRight: '↗', Bell: '♧', Check: '✓', CheckCheck: '✓✓', ChevronDown: '⌄', CircleHelp: '?', Clock3: '◷', Command: '⌘', Inbox: '▤', ListFilter: '☷', Search: '⌕', Settings2: '⚙', ShieldCheck: '⬡', SlidersHorizontal: '☷', Sparkles: '✳', Users: '♧', X: '×'
};
export function Icon({ name, size = 16, className = '' }) {
 return <span aria-hidden="true" className={`icon ${className}`} style={{ width: size, height: size, fontSize: Math.max(10, size) }}>{icons[name] ?? '·'}</span>;
}
