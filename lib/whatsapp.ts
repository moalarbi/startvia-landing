const PHONE = '966537311886';
export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
export function packageMessage(packageName?: string, type?: string) {
  return `Hi Startvia, I want to start a U.S. company.${packageName ? ` I am interested in ${packageName}.` : ''}${type ? ` Company type: ${type}.` : ''}`;
}
