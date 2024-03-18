import React, { useState } from 'react';
import { Button } from './ui/button';
import { Clipboard, ClipboardCheck  } from "lucide-react";
import toast from 'react-hot-toast';

const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const stripMarkdown = (input: string): string => {
    return input.replace(/[`]/g, ''); // Remove markdown characters: _, *, [, ], `
  };

  const copyToClipboard = async () => {
    try {
      const strippedText = stripMarkdown(text);
      await navigator.clipboard.writeText(strippedText);
      setCopied(true);
      toast.success('Copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      <Button 
        onClick={copyToClipboard}>
        {copied ? 
          <ClipboardCheck /> : 
          <Clipboard/>}
      </Button>
    </div>
  );
};

export default CopyToClipboardButton;
