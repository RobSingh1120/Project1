<?php

/* modules/contrib/webform/templates/webform-confirmation.html.twig */
class __TwigTemplate_0c5dd8e1728a3b3a98d49c26b075c9107335009efee80d19a425569b7bc45670 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 18);
        $filters = array();
        $functions = array("attach_library" => 16);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array(),
                array('attach_library')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 16
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("webform/webform.confirmation"), "html", null, true));
        echo "

";
        // line 18
        if ((isset($context["progress"]) ? $context["progress"] : null)) {
            // line 19
            echo "  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["progress"]) ? $context["progress"] : null), "html", null, true));
            echo "
";
        }
        // line 21
        echo "
<div";
        // line 22
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => "webform-confirmation"), "method"), "html", null, true));
        echo ">

  ";
        // line 24
        if ((isset($context["message"]) ? $context["message"] : null)) {
            // line 25
            echo "    <div class=\"webform-confirmation__message\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["message"]) ? $context["message"] : null), "html", null, true));
            echo "</div>
  ";
        }
        // line 27
        echo "
  ";
        // line 28
        if ((isset($context["back"]) ? $context["back"] : null)) {
            // line 29
            echo "  <div class=\"webform-confirmation__back\">
    <a href=\"";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["back_url"]) ? $context["back_url"] : null), "html", null, true));
            echo "\" rel=\"back\" title=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["back_label"]) ? $context["back_label"] : null), "html", null, true));
            echo "\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["back_attributes"]) ? $context["back_attributes"] : null), "html", null, true));
            echo ">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["back_label"]) ? $context["back_label"] : null), "html", null, true));
            echo "</a>
  </div>
  ";
        }
        // line 33
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/webform/templates/webform-confirmation.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  92 => 33,  80 => 30,  77 => 29,  75 => 28,  72 => 27,  66 => 25,  64 => 24,  59 => 22,  56 => 21,  50 => 19,  48 => 18,  43 => 16,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/contrib/webform/templates/webform-confirmation.html.twig", "/var/www/html/RND/RobinSingh/drupal-8.5.6/modules/contrib/webform/templates/webform-confirmation.html.twig");
    }
}
