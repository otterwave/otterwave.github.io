import React from 'react';

export interface OWButtonProps {
  action: string;
  path?: string;
  color: 'primary' | 'secondary';
  onClick?: () => void;
}

const OWButton: React.FC<OWButtonProps> = ({ action, color, onClick }) => {
  const gradientClasses = color === 'primary'
    ? { from: '#36BA98', to: '#E76F51' }
    : { from: '#E76F51', to: '#36BA98' };

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white rounded-sm transition duration-300 inline-block"
      style={{
        background: `linear-gradient(135deg, ${gradientClasses.from}, ${gradientClasses.to})`,
        color: 'white',
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
        textDecoration: 'none',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      {action}

      {/* Hover Effect */}
      <style jsx>{`
        button:hover {
          transform: translateY(-2px); /* Move up on hover */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Light shadow on hover */
        }
      `}</style>
    </button>
  );
};

export default OWButton;
