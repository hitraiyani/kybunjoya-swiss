import clsx from 'clsx';

function Icon({children, className, fill = 'currentColor', stroke, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill={fill}
      stroke={stroke}
      className={clsx('w-10 h-10', className)}
    >
      {children}
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Menu</title>
      <line x1="3" y1="6.375" x2="17" y2="6.375" strokeWidth="1.25" />
      <line x1="3" y1="10.375" x2="17" y2="10.375" strokeWidth="1.25" />
      <line x1="3" y1="14.375" x2="17" y2="14.375" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconClose(props) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        strokeWidth="1"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        strokeWidth="1"
      />
    </Icon>
  );
}

export function IconArrow({direction = 'right'}) {
  let rotate;

  switch (direction) {
    case 'right':
      rotate = 'rotate-0';
      break;
    case 'left':
      rotate = 'rotate-180';
      break;
    case 'up':
      rotate = '-rotate-90';
      break;
    case 'down':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon className={`w-5 h-5 ${rotate}`}>
      <title>Arrow</title>
      <path d="M7 3L14 10L7 17" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconCaret({
  direction = 'down',
  stroke = 'currentColor',
  ...props
}) {
  let rotate;

  switch (direction) {
    case 'down':
      rotate = 'rotate-0';
      break;
    case 'up':
      rotate = 'rotate-180';
      break;
    case 'left':
      rotate = '-rotate-90';
      break;
    case 'right':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon
      {...props}
      className={`w-5 h-5 transition ${rotate}`}
      fill="transparent"
      stroke={stroke}
    >
      <title>Caret</title>
      <path d="M14 8L10 12L6 8" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconSelect(props) {
  return (
    <Icon {...props}>
      <title>Select</title>
      <path d="M7 8.5L10 6.5L13 8.5" strokeWidth="1.25" />
      <path d="M13 11.5L10 13.5L7 11.5" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconBag(props) {
  return (
    <Icon {...props}>
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </Icon>
  );
}

export function IconAccount(props) {
  return (
    <Icon {...props}>
      <title>Account</title>
      <path
        fillRule="evenodd"
        d="M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"
      />
    </Icon>
  );
}

export function IconHelp(props) {
  return (
    <Icon {...props}>
      <title>Help</title>
      <path d="M3.375 10a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0ZM10 2.125a7.875 7.875 0 1 0 0 15.75 7.875 7.875 0 0 0 0-15.75Zm.699 10.507H9.236V14h1.463v-1.368ZM7.675 7.576A3.256 3.256 0 0 0 7.5 8.67h1.245c0-.496.105-.89.316-1.182.218-.299.553-.448 1.005-.448a1 1 0 0 1 .327.065c.124.044.24.113.35.208.108.095.2.223.272.383.08.154.12.34.12.558a1.3 1.3 0 0 1-.076.471c-.044.131-.11.252-.197.361-.08.102-.174.197-.283.285-.102.087-.212.182-.328.284a3.157 3.157 0 0 0-.382.383c-.102.124-.19.27-.262.438a2.476 2.476 0 0 0-.164.591 6.333 6.333 0 0 0-.043.81h1.179c0-.263.021-.485.065-.668a1.65 1.65 0 0 1 .207-.47c.088-.139.19-.263.306-.372.117-.11.244-.223.382-.34l.35-.306c.116-.11.218-.23.305-.361.095-.139.168-.3.219-.482.058-.19.087-.412.087-.667 0-.35-.062-.664-.186-.942a1.881 1.881 0 0 0-.513-.689 2.07 2.07 0 0 0-.753-.427A2.721 2.721 0 0 0 10.12 6c-.4 0-.764.066-1.092.197a2.36 2.36 0 0 0-.83.536c-.225.234-.4.515-.523.843Z" />
    </Icon>
  );
}

export function IconSearch(props) {
  return (
    <Icon {...props}>
      <title>Search</title>
      <path
        fillRule="evenodd"
        d="M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"
      />
    </Icon>
  );
}

export function IconCheck({stroke = 'currentColor', ...props}) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Check</title>
      <circle cx="10" cy="10" r="7.25" strokeWidth="1.25" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.04 10.37 2.42 2.41 3.5-5.56"
      />
    </Icon>
  );
}

export function IconXMark({stroke = 'currentColor', ...props}) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Delete</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Icon>
  );
}

export function IconRemove(props) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Remove</title>
      <path
        d="M4 6H16"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.5 6L6 17H14L14.5 6"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6"
        strokeWidth="1.25"
      />
    </Icon>
  );
}

export function IconFilters(props) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Filters</title>
      <circle cx="4.5" cy="6.5" r="2" />
      <line x1="6" y1="6.5" x2="14" y2="6.5" />
      <line x1="4.37114e-08" y1="6.5" x2="3" y2="6.5" />
      <line x1="4.37114e-08" y1="13.5" x2="8" y2="13.5" />
      <line x1="11" y1="13.5" x2="14" y2="13.5" />
      <circle cx="9.5" cy="13.5" r="2" />
    </Icon>
  );
}
export function ArrowRightLight(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256"><path fill="currentColor" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z" /></svg>
  );
}
export function ArrowRight(props) {
  return (
    <svg {...props} width={23} height={44} viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.81201 0.629639L21.1304 21.7295L0.81201 42.8293" stroke="currentColor" strokeWidth="1.54803" />
  </svg>
  );
}
export function IconCart(props) {
  return (
    <svg
    {...props}
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.34676 16.5C4.94305 16.5 4.5989 16.3593 4.3143 16.078C4.02969 15.7967 3.88739 15.4585 3.88739 15.0634C3.88739 14.6683 4.03113 14.3315 4.31861 14.053C4.6061 13.7745 4.95169 13.6353 5.35538 13.6353C5.75908 13.6353 6.10323 13.7759 6.38784 14.0573C6.67244 14.3386 6.81474 14.6768 6.81474 15.0719C6.81474 15.4669 6.671 15.8037 6.38353 16.0822C6.09604 16.3607 5.75045 16.5 5.34676 16.5ZM13.4783 16.5C13.0746 16.5 12.7304 16.3593 12.4458 16.078C12.1612 15.7967 12.0189 15.4585 12.0189 15.0634C12.0189 14.6683 12.1627 14.3315 12.4501 14.053C12.7376 13.7745 13.0832 13.6353 13.4869 13.6353C13.8906 13.6353 14.2348 13.7759 14.5194 14.0573C14.804 14.3386 14.9463 14.6768 14.9463 15.0719C14.9463 15.4669 14.8025 15.8037 14.5151 16.0822C14.2276 16.3607 13.882 16.5 13.4783 16.5ZM3.71813 2.07163H15.5523C15.9064 2.07163 16.1757 2.22833 16.3605 2.54173C16.5452 2.85513 16.5465 3.17011 16.3644 3.4867L13.7027 8.18299C13.5471 8.44132 13.3472 8.64992 13.1029 8.80879C12.8586 8.96766 12.5881 9.04709 12.2914 9.04709H6.16643L5.06205 11.0637H14.9997V12.362H5.14778C4.55264 12.362 4.12486 12.1668 3.86442 11.7765C3.60397 11.3861 3.60897 10.9509 3.87944 10.4708L5.16589 8.15185L2.10508 1.79829H0.5V0.5H2.96597L3.71813 2.07163Z"
      fill="currentColor"
    />
  </svg>
  );
}
export function IconMapPin(props) {
  return (
    <svg {...props} width={14} height={19} viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99993 0C3.41023 0 0.5 2.95206 0.5 6.59384C0.5 7.21957 0.587887 7.82426 0.748523 8.3978C0.847343 8.75095 0.955485 9.10174 1.12614 9.41877C2.4591 11.8943 7 19 7 19C7 19 11.5411 11.8943 12.8741 9.4187C13.0447 9.10167 13.1527 8.75095 13.2517 8.39787C13.4122 7.82426 13.5001 7.21964 13.5001 6.59391C13.5 2.95206 10.5898 0 6.99993 0ZM6.99993 10.5091C4.86835 10.5091 3.14033 8.75614 3.14033 6.59376C3.14033 4.43139 4.86835 2.6784 6.99993 2.6784C9.13151 2.6784 10.8595 4.43139 10.8595 6.59376C10.8595 8.75614 9.13151 10.5091 6.99993 10.5091Z" fill="white" />
  </svg>
  );
}
export function FaAngleUp(props) {
  return (
    <svg {...props} width={28} height={46} viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8219 4.88124L2.46909 15.2366L0.70117 13.4686L14.0705 0.101849L27.4397 13.4686L25.6743 15.2366L15.319 4.88124L15.319 45.5659L12.8219 45.5659L12.8219 4.88124Z" fill="white" />
      </svg>
  );
}
