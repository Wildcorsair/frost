<?php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    /**
     * @Route("/login");
     */
    public function login() {
        return new Response(
          json_encode(array(
              'status' => 'ok',
              '_token' => 'fe524rwe64ERgf54%$da63dFKJ654kUW5ds4f6asd'
          )),
          Response::HTTP_OK,
          array('Content-Type' => 'application/json')
        );
    }
}
