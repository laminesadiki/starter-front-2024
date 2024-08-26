import Navbar from '@components/Navbar/Navbar';
import styles from './WithNavbarAndSidepanel.module.scss';
import {
   MouseEvent,
   ReactNode,
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react';

export default function WithNavbarAndSidepanel(props: {
   SidePanel: ReactNode;
   Content: ReactNode;
}) {
   const { SidePanel, Content } = props;

   const sidebarRef = useRef<HTMLDivElement>(null);
   const [isResizing, setIsResizing] = useState(false);
   const [sidebarWidth, setSidebarWidth] = useState(450);

   const startResizing = useCallback(() => {
      setIsResizing(true);
   }, []);

   const stopResizing = useCallback(() => {
      setIsResizing(false);
   }, []);

   const resize = useCallback(
      (mouseMoveEvent: MouseEvent<HTMLDivElement>) => {
         if (isResizing && sidebarRef.current) {
            const sidebarLeft = sidebarRef.current.getBoundingClientRect().left;
            const newWidth = mouseMoveEvent.clientX - sidebarLeft;
            setSidebarWidth(newWidth);
         }
      },
      [isResizing],
   );

   useEffect(() => {
      // @ts-expect-error type overloading of resize function
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
      return () => {
         // @ts-expect-error type overloading of resize function
         window.removeEventListener('mousemove', resize);
         window.removeEventListener('mouseup', stopResizing);
      };
   }, [resize, stopResizing]);
   return (
      <div className={styles.main}>
         <Navbar />
         <div className={styles['app-container']}>
            <div
               ref={sidebarRef}
               className={styles['app-sidebar']}
               style={{
                  width: sidebarWidth > 450 ? sidebarWidth : 'fit-content',
               }}
            >
               <div className={styles['app-sidebar-content']}>{SidePanel}</div>
               <div
                  className={styles['app-sidebar-resizer']}
                  onMouseDown={startResizing}
               />
            </div>
            <div className={styles['app-frame']}>{Content}</div>
         </div>
      </div>
   );
}
