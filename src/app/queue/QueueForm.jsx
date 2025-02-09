"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function QuestionForm() {
  const [isInPerson, setIsInPerson] = useState(false);
  const [description, setDescription] = useState('');
  const [zoomLink, setZoomLink] = useState('');
  const [question, setQuestion] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/biology');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="in-person"
            checked={isInPerson}
            onCheckedChange={setIsInPerson}
          />
          <Label htmlFor="in-person">In Person</Label>
        </div>

        {isInPerson ? (
          <div>
            <Label htmlFor="description">Describe Yourself</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description"
              required
            />
          </div>
        ) : (
          <div>
            <Label htmlFor="zoom-link">Zoom Link</Label>
            <Input
              id="zoom-link"
              type="url"
              value={zoomLink}
              onChange={(e) => setZoomLink(e.target.value)}
              placeholder="https://zoom.us/..."
              required
            />
          </div>
        )}

        <div>
          <Label htmlFor="question">Your Question</Label>
          <Input
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            required
          />
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
}