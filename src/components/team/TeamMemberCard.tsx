'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

export type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
  bio: string;
};

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts[parts.length - 1]?.[0] ?? '';
  return (first + last).toUpperCase();
}

function createPreview(text: string, maxChars: number = 320): { preview: string; truncated: boolean } {
  if (text.length <= maxChars) return { preview: text, truncated: false };
  // Try to end on a sentence boundary or word boundary near maxChars
  const slice = text.slice(0, maxChars);
  const lastPeriod = slice.lastIndexOf('. ');
  const lastSpace = slice.lastIndexOf(' ');
  const cutIndex = lastPeriod > maxChars * 0.6 ? lastPeriod + 1 : lastSpace > 0 ? lastSpace : maxChars;
  return { preview: text.slice(0, cutIndex).trim() + '…', truncated: true };
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false);
  const { preview, truncated } = useMemo(() => createPreview(member.bio), [member.bio]);

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-800 hover:ring-gray-700 hover:shadow-md transition">
      <div className="relative h-64 w-full">
        {member.imageSrc ? (
          <Image src={member.imageSrc} alt={member.name} fill className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
            <span className="text-5xl font-bold text-gray-300">{getInitials(member.name)}</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-primary-300 font-medium">{member.role}</p>
        <div className="mt-3 text-gray-300 text-sm leading-6">
          <p>{expanded ? member.bio : preview}</p>
          {truncated && (
            <button
              type="button"
              className="mt-2 text-primary-300 hover:text-primary-200 font-semibold"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


