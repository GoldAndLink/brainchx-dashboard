// @ts-ignore
import LogoFull from '../../public/logo.png';
// @ts-ignore
import LogoShort from '../../public/logo-short.png';
import Image from 'next/image';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  return (
    <Image
      src={iconOnly ? LogoShort : LogoFull}
      alt="Logo"
      // @ts-ignore
      width={iconOnly ? 48 : 155}
      // @ts-ignore
      height={28}
      {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
}
