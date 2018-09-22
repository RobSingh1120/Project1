<?php

/* modules/contrib/webform/templates/webform-submission-information.html.twig */
class __TwigTemplate_28ae2fd83187d27011f86427aa8c0371037484e05c6483e6640f0c0f8d13fdaa extends Twig_Template
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
        $tags = array("if" => 14);
        $filters = array("t" => 15);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('t'),
                array()
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

        // line 14
        echo "<details data-webform-element-id=\"";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["webform_id"]) ? $context["webform_id"] : null), "html", null, true));
        echo "--submission_information\"";
        if ((isset($context["open"]) ? $context["open"] : null)) {
            echo " open=\"open\"";
        }
        echo ">
  <summary role=\"button\"";
        // line 15
        if ((isset($context["open"]) ? $context["open"] : null)) {
            echo " aria-expanded=\"true\" aria-pressed=\"true\"";
        }
        echo ">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission information")));
        echo "</summary>
  <div class=\"details-wrapper\">
    ";
        // line 17
        if ((isset($context["submissions_view"]) ? $context["submissions_view"] : null)) {
            // line 18
            echo "      <div><b>";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission Number")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["serial"]) ? $context["serial"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 19
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission ID")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["sid"]) ? $context["sid"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 20
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission UUID")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["uuid"]) ? $context["uuid"] : null), "html", null, true));
            echo "</div>
      ";
            // line 21
            if ((isset($context["uri"]) ? $context["uri"] : null)) {
                // line 22
                echo "        <div><b>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission URI")));
                echo ":</b> ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["uri"]) ? $context["uri"] : null), "html", null, true));
                echo "</div>
      ";
            }
            // line 24
            echo "      ";
            if ((isset($context["token_update"]) ? $context["token_update"] : null)) {
                // line 25
                echo "        <div><b>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission Update")));
                echo ":</b> ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["token_update"]) ? $context["token_update"] : null), "html", null, true));
                echo "</div>
      ";
            }
            // line 27
            echo "      <br />
      <div><b>";
            // line 28
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Created")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["created"]) ? $context["created"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 29
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Completed")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["completed"]) ? $context["completed"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Changed")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["changed"]) ? $context["changed"] : null), "html", null, true));
            echo "</div>
      <br />
      <div><b>";
            // line 32
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Remote IP address")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["remote_addr"]) ? $context["remote_addr"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 33
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submitted by")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["submitted_by"]) ? $context["submitted_by"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 34
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Language")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["language"]) ? $context["language"] : null), "html", null, true));
            echo "</div>
      <br />
      <div><b>";
            // line 36
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Is draft")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["is_draft"]) ? $context["is_draft"] : null), "html", null, true));
            echo "</div>
      ";
            // line 37
            if ((isset($context["current_page"]) ? $context["current_page"] : null)) {
                // line 38
                echo "        <div><b>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Current page")));
                echo ":</b> ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["current_page"]) ? $context["current_page"] : null), "html", null, true));
                echo "</div>
      ";
            }
            // line 40
            echo "      <div><b>";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Webform")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["webform"]) ? $context["webform"] : null), "html", null, true));
            echo "</div>
      ";
            // line 41
            if ((isset($context["submitted_to"]) ? $context["submitted_to"] : null)) {
                // line 42
                echo "        <div><b>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submitted to")));
                echo ":</b> ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["submitted_to"]) ? $context["submitted_to"] : null), "html", null, true));
                echo "</div>
      ";
            }
            // line 44
            echo "      ";
            if ((((isset($context["sticky"]) ? $context["sticky"] : null) || (isset($context["locked"]) ? $context["locked"] : null)) || (isset($context["notes"]) ? $context["notes"] : null))) {
                // line 45
                echo "        <br />
        ";
                // line 46
                if ((isset($context["sticky"]) ? $context["sticky"] : null)) {
                    // line 47
                    echo "          <div><b>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Flagged")));
                    echo ":</b> ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["sticky"]) ? $context["sticky"] : null), "html", null, true));
                    echo "</div>
        ";
                }
                // line 49
                echo "        ";
                if ((isset($context["locked"]) ? $context["locked"] : null)) {
                    // line 50
                    echo "          <div><b>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Locked")));
                    echo ":</b> ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["locked"]) ? $context["locked"] : null), "html", null, true));
                    echo "</div>
        ";
                }
                // line 52
                echo "        ";
                if ((isset($context["notes"]) ? $context["notes"] : null)) {
                    // line 53
                    echo "          <div><b>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Notes")));
                    echo ":</b><br/>
          <pre>";
                    // line 54
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["notes"]) ? $context["notes"] : null), "html", null, true));
                    echo "</pre>
          </div>
        ";
                }
                // line 57
                echo "      ";
            }
            // line 58
            echo "
    ";
        } else {
            // line 60
            echo "      <div><b>";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Submission Number")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["serial"]) ? $context["serial"] : null), "html", null, true));
            echo "</div>
      <div><b>";
            // line 61
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Created")));
            echo ":</b> ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["created"]) ? $context["created"] : null), "html", null, true));
            echo "</div>
    ";
        }
        // line 63
        echo "
  </div>
</details>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/webform/templates/webform-submission-information.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  239 => 63,  232 => 61,  225 => 60,  221 => 58,  218 => 57,  212 => 54,  207 => 53,  204 => 52,  196 => 50,  193 => 49,  185 => 47,  183 => 46,  180 => 45,  177 => 44,  169 => 42,  167 => 41,  160 => 40,  152 => 38,  150 => 37,  144 => 36,  137 => 34,  131 => 33,  125 => 32,  118 => 30,  112 => 29,  106 => 28,  103 => 27,  95 => 25,  92 => 24,  84 => 22,  82 => 21,  76 => 20,  70 => 19,  63 => 18,  61 => 17,  52 => 15,  43 => 14,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/contrib/webform/templates/webform-submission-information.html.twig", "/var/www/html/RND/RobinSingh/drupal-8.5.6/modules/contrib/webform/templates/webform-submission-information.html.twig");
    }
}
