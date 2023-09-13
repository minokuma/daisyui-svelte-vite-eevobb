<script>
	import Main1Comp from './components/Main1Comp.svelte';
  import Main2Comp from './components/Main2Comp.svelte';
  import Main3Comp from './components/Main3Comp.svelte';
  import Main4Comp from './components/Main4Comp.svelte';
  import Main5Comp from './components/Main5Comp.svelte';
  import Main6Comp from './components/Main6Comp.svelte';
  import { isLogin } from './stores/stores'
  import AiOutlineMenu from "svelte-icons-pack/ai/AiOutlineMenu";
  import AiOutlineClose from "svelte-icons-pack/ai/AiOutlineClose";
  import BiSolidSun from "svelte-icons-pack/bi/BiSolidSun";
  import BiSolidMoon from "svelte-icons-pack/bi/BiSolidMoon";
  import BsMoonStars from "svelte-icons-pack/bs/BsMoonStars";

  import { reveal } from 'svelte-reveal';
  import LoginPage from './pages/LoginPage.svelte'
  import { fade } from 'svelte/transition';
  import {Route,router,active} from 'tinro'; 
  import { isDarkMode } from './stores/stores.js';
  import { onMount } from 'svelte';
  import NotFoundPage from './pages/NotFoundPage.svelte';
  

  let deviceType = '';
  // 모바일 환경 여부를 체크하는 함수
  function checkMobile() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      deviceType = 'sm';
    } else if (screenWidth <= 768) {
      deviceType = 'md';
    } else if (screenWidth <= 1279) {
      deviceType = 'lg';
    } else {
      deviceType = 'xl';
    }
  }

  // 시차 효과 스크립트 종료
  onMount(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });

  import {
    Collapse,
    Navbar,
    Styles,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
  } from 'sveltestrap';
  import FooterComp from './components/FooterComp.svelte';
  import AuthHeaderComp from './components/AuthHeaderComp.svelte';
  import CarouselComp from './components/CarouselComp.svelte';

  // let isLoading = false;

  // async function fetchData() {
  //   isLoading = true;
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //     if (!response.ok) {
  //       throw new Error('API 호출이 실패했습니다.');
  //     }
  //     data = await response.json();
  //     console.log(data);

  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     isLoading = false;
  //   }
  // }
</script>

<!-- <Styles $isDarkMode ? dark: light /> -->

<AuthHeaderComp />
<!-- <svelte:window bind:scrollY={y} bind:innerHeight={innerHeight}/> -->

<!-- 로그인 루트 -->
<Route path="/login">
  <div class="" transition:fade={{ y: -100 }}>
    <LoginPage/>
    <FooterComp />
  </div>
  
</Route>

<!-- 홈 루트 -->
<Route path="/">
  <div transition:fade={{ y: -100 }}>
    <CarouselComp />
  </div>
  <Main1Comp />
  <Main2Comp />
  <Main3Comp />
  <Main4Comp />
  <Main5Comp />
  <Main6Comp />
   
</Route>

<!-- 페이지 찾기 실패 -->
<Route fallback>
  <NotFoundPage />
</Route>  